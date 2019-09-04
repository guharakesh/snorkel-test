import { useState } from 'react';
import Card from '../Card';
import Chip from '../Chip';
import Input from '../Input';
import sentences from '../../sentences.json';

export default () => {
  const [queries, setQueries] = useState([]);

  const handleChange = ({ target: { value: input } }) => {
    const regex = /(["'])(\2.)*?\1/g;
    const quoted = (input.match(regex) || ['""']);
    
    const noquotes = quoted.reduce((acc, value) => acc.replace(value, ''), input);

    setQueries([
      ...quoted.map(value => value.slice(1, -1)),
      ...noquotes.split(' '),
    ]
      .filter(value => value)
      .map(value => value.toLowerCase().trim())
    );
  };

  const chips = (() =>
    sentences
      .filter(({ data }) => queries.length && queries.every(value => data.includes(value)))
      .map(({ id, data }) => <Chip key={id}>{data}</Chip>)
  )();

  return (
    <div>
      <Card>
        <Input onChange={handleChange} />
        <div className="results">
          {chips}
        </div>
      </Card>
      <style jsx>{`
        .results {
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }
      `}</style>
    </div>
  )
};
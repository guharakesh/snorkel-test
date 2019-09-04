import { useState } from 'react';
import Card from '../Card';
import Chip from '../Chip';
import Input from '../Input';

import { getQuotes, stripQuotes } from './utils';

import sentences from '../../sentences.json';

export default () => {
  const [queries, setQueries] = useState([]);

  const handleChange = ({ target: { value: input } }) => {
    const quotes = getQuotes(input);
    const noquotes = stripQuotes(input);

    setQueries([
      ...quotes,
      ...noquotes.split(' '),
    ]
      .filter(value => value) // remove empty values
      .map(value => value.toLowerCase().trim()) 
    );
  };

  const chips = (() =>
    sentences
      .filter(({ data }) => queries.length && queries.every(value => data
        .toLowerCase()
        .includes(value)))
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
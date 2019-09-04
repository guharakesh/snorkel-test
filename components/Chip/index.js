import Text from '../Text';

export default ({ children }) => (
  <div>
    <Text>
      {children}
    </Text>
    <style jsx>{`
      div {
        background-color: #65BAF6;
        border: none;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        border-radius: 8px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
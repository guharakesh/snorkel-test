export default props => (
  <div>
    <input {...props} />
    <style jsx>{`
      input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
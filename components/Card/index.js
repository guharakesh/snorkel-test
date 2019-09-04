export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        width: 400px;
        height: 500px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 2px 16px;
        display: flex;
        flex-direction: column;
      }     
    `}</style>
  </div>
);
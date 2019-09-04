export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        font: 11px helvetica;
        color: white;
      }
    `}</style>
  </div>
);
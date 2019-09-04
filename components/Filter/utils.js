export const getQuotes = text => {
  const quotes = text.match(/(["'])(\2.)*?\1/g) || [];
  return quotes.map(value => value.slice(1, -1));
}

export const stripQuotes = text => {
  const quotes = text.match(/(["'])(\2.)*?\1/g) || [];
  return quotes.reduce((acc, value) => acc.replace(value, ''), text);
}
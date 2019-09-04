import { getQuotes, stripQuotes } from './utils';

describe('getQuotes', () => {
  test('finds text between quotes', () => {
    const result = getQuotes(`this text has "quotes in it"`);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(`quotes in it`);
  });

  test('returns empty array when there are no quotes', () => {
    const result = getQuotes(`this text has no quotes in it`);
    expect(result.length).toBe(0);
  });
})

test('remove quoted segments from a string', () => {
  const result = stripQuotes(`this text has "quotes in it"`);
  expect(result).toBe('this text has ');
})
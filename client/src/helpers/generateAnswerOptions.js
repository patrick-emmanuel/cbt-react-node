const map = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten'
}

export default (obj) => {
  const options = Object.keys(obj);
  const answerOptions = options.reduce((accumulator, key) => {
    if (key.startsWith('option')) {
      const number = Number(key[key.length - 1])
      const nummberInWords = map[number]
      debugger;
      accumulator[nummberInWords] = false;
      return accumulator;
    }
    return accumulator;
  }, {});
  return answerOptions;
}

const map = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten'
}

export default (obj) => {
  const options = Object.keys(obj);
  const questionId = obj['id'];
  const answerOptions = options.reduce((accumulator, key) => {
    if (key.startsWith('option')) {
      const number = Number(key[key.length - 1])
      const numberInWords = map[number];
      const optionId = `question${questionId}.option${number}.correct`;
      accumulator[optionId] = {
        name: optionId,
        value: false,
        label: numberInWords
      }
      return accumulator;
    }
    return accumulator;
  }, {});
  return answerOptions;
}

export default (obj) => {
  Object.keys(obj).reduce((accumulator, key) => {
    if (key.startsWith('option')) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
}

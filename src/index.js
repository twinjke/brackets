module.exports = function check(str, bracketsConfig) {
  const len = str.length / 2;
  const pairs = bracketsConfig
    .flat()
    .join()
    .replaceAll(",", "")
    .match(/.{1,2}/g);
  for (let i = 0; i < len; i++) {
    for (let pair of pairs) {
      if (str.includes(pair)) {
        str = str.replace(pair, "");
      }
    }
  }

  return str ? false : true;
};

function addqm(word) {
  return "'" + word + "'";
}

console.log('"[' + require('../pure-funcs').map(addqm).join(',') + ']"');

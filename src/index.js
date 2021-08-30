module.exports = function check(str, bracketsConfig) {
  const OPEN = bracketsConfig.map(item => item[0]);
  const PAIR = bracketsConfig.reduce((obj, item) => {
    obj[item[1]] = item[0];
    return obj;
  }, {});
  let stack = [];
  //console.log(str.split('||'));
  for (let symb of str) {
    if (OPEN.includes(symb)) { 
      stack.push(symb);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      //console.log(symb);
      if (PAIR[symb] === topElement) {
        stack.pop();
      } else {
        return false;
      } 
    }
    //console.log({stack});
  }
  return stack.length === 0;
}
/*
console.log(check('()', [['(', ')']]));
console.log(check('((()))()', [['(', ')']]));
console.log(check('())(', [['(', ')']]));
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));
console.log(check('[(])', [['(', ')'], ['[', ']']]));
console.log(check('[]()', [['(', ')'], ['[', ']']]));
console.log(check('[]()(', [['(', ')'], ['[', ']']]));
console.log(check('((()))()', [['(', ')']]));
console.log(check('||', [['|', '|']]));
console.log(check('|()|', [['(', ')'], ['|', '|']]));
console.log(check('|(|)', [['(', ')'], ['|', '|']]));
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));
*/
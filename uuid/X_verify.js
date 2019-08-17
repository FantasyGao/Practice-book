
// 左移	a << b	将 a 的二进制形式向左移 b (< 32) 比特位，右边用0填充。
function checkId(id) {
  if (typeof id === 'number') return '请输入字符串类型的身份证号';
  if(id.length !== 18) return '请输入正确的身份证号';
  let sum = 0;
  for(let i=0; i<17; i++) {
    sum += ((1 << (17 - i)) % 11) * id[i];
  }
  const n = (12 - (sum % 11)) % 11;
  return n === Number(id[17]) || id[17] === 'X';
}

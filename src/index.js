module.exports = function zeros(expression) {
  const expressionArr = expression.split('*');
  const doubleFactorial = '!!';
  const regExp = /\d+/g;
  let arrZeros = [0, 0];

  expressionArr.forEach(element => {
    let typeFactorial = element.indexOf(doubleFactorial) !== -1 ? 2 : 1;
    const number = element.match(regExp).join('');
    countZeros(number, typeFactorial);
  });

  function countZeros(number, count) {
    for (let i = number; i > 0; i -= count) {
      if (i % 2 === 0) {
        arrZeros[0]++;
      }
      if (i % 5 === 0) {
        arrZeros[1]++;
      }
      if (i % 25 === 0) {
        arrZeros[1]++;
      }
    }
  }
  return Math.min.apply(null, arrZeros);
};

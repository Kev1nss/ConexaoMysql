const conta = require('./conta');

const resultado = conta.calcularEquacaoSegundoGrau(1, -5, 6);

if (resultado) {
  console.log(`x1 = ${resultado.x1}`);
  console.log(`x2 = ${resultado.x2}`);
} else {
  console.log('Não há solução real.');
}
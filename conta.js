function calcularEquacaoSegundoGrau(a, b, c) {
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return null;
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return { x1, x2 };
}

module.exports = { calcularEquacaoSegundoGrau };
function decimalNumberSystem(number: number, base: number): string {
  const polynomial: number[] = [];

  while (hasQuotientDifferentOfZero(number, base)) {
    const [quotient, rest] = divide(number, base);

    polynomial.push(rest);

    number = quotient;
  }

  const [, rest] = divide(number, base);
  polynomial.push(rest);

  return polynomial.reverse().join('');
}

function decimalNumberSystemInBase10(number: number): string {
  return `${number}`;
}

function divide(number: number, base: number): number[] {
  const quotient = Math.floor(number / base);
  const rest = number % base;

  return [quotient, rest];
}

function hasQuotientDifferentOfZero(number: number, base: number): boolean {
  return divide(number, base)[0] !== 0;
}

export { decimalNumberSystem, decimalNumberSystemInBase10 };

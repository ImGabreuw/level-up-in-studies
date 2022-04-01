function scientificNotation(number: number): {
  digits: string;
  exponentOf10: string;
} {
  const numberInNotation = number.toExponential();
  const [digits, exponentOf10] = numberInNotation.split('e');

  if (digits.length > 2) {
    return {
      digits: Number(digits).toFixed(2),
      exponentOf10,
    };
  }

  return { digits, exponentOf10 };
}

export { scientificNotation };

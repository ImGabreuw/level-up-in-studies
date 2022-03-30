function factorial(number: number, cache: number[] = []): number {
  if (number <= 1) {
    return 1;
  }

  if (cache[number]) {
    return cache[number];
  }

  return (cache[number] = number * factorial(number - 1));
}

export default factorial;

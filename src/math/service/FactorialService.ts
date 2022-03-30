import factorial from '../domain/factorial';

class FactorialService {
  execute(value: string): number | string {
    const number = parseInt(value);

    if (!number) {
      return `'number' parameter is not a number`;
    }

    if (number < 0) {
      return `'number' parameter must be positive`;
    }

    if (number > 150) {
      return `'number' parameter must be less or equal to 150`;
    }

    return factorial(number);
  }
}

export { FactorialService };

import factorial from '../domain/factorial';

class FactorialService {
  execute(value: string): number | string {
    const number = parseInt(value);

    if (!number) {
      return `${value} is not a number`;
    }

    if (number < 0) {
      return `Number must be positive`;
    }

    if (number > 150) {
      return `Number must be less or equal to 150`;
    }

    return factorial(number);
  }
}

export { FactorialService };

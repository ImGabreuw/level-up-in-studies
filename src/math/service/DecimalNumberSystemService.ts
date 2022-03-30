import {
  decimalNumberSystem,
  decimalNumberSystemInBase10,
} from '../domain/decimal-number-system';

class DecimalNumberSystemService {
  execute(rawNumber: string, rawBase: string): string {
    const number = parseInt(rawNumber);
    const base = parseInt(rawBase);

    if (!number || !base) {
      return `'number' or/and 'base' is not a number`;
    }

    if (number < 0 || base < 0) {
      return `'number' and 'base' must be positive`;
    }

    if (base < 2) {
      return `'base' must be greater than 1`;
    }

    if (base === 10) {
      return decimalNumberSystemInBase10(number);
    }

    return decimalNumberSystem(number, base);
  }
}

export { DecimalNumberSystemService };

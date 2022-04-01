import { scientificNotation } from '../domain/scientific-notation';

class ScientificNotationService {
  execute(value: string):
    | {
        digits: string;
        exponentOf10: string;
      }
    | string {
    const number = Number(value);

    if (!number) {
      return `'number' parameter is not a number`;
    }

    return scientificNotation(number);
  }
}

export { ScientificNotationService };

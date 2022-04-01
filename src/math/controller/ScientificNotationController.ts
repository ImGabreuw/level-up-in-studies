import { Request, Response } from 'express';
import { ScientificNotationService } from '../service/ScientificNotationService';

class ScientificNotationController {
  async handle(request: Request, response: Response) {
    const { number: numberQuery } = request.query;

    if (!numberQuery) {
      return response.status(400).json({
        result: `'number' parameter is mandatory`,
      });
    }

    const number = numberQuery as string;

    const result = new ScientificNotationService().execute(number);

    return response.json({
      result,
    });
  }
}

export { ScientificNotationController };

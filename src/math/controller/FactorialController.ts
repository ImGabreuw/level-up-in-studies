import { Request, Response } from 'express';
import { FactorialService } from '../service/FactorialService';

class FactorialController {
  async handle(request: Request, response: Response) {
    const { number: numberQuery } = request.query;

    if (!numberQuery) {
      return response.status(400).json({
        result: `'number' parameter is mandatory.`,
      });
    }

    const number = numberQuery as string;

    const result = new FactorialService().execute(number);

    return response.json({
      result,
    });
  }
}

export { FactorialController };

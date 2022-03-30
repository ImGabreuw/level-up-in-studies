import { Request, Response } from 'express';
import { DecimalNumberSystemService } from '../service/DecimalNumberSystemService';

class DecimalNumberSystemController {
  async handle(request: Request, response: Response) {
    const { number: numberQuery, base: baseQuery } = request.query;

    if (!numberQuery || !baseQuery) {
      return response.status(400).json({
        result: `'number' and 'base' parameters are mandatory`,
      });
    }

    const number = numberQuery as string;
    const base = baseQuery as string;

    const result = new DecimalNumberSystemService().execute(number, base);

    return response.json({
      result,
    });
  }
}

export { DecimalNumberSystemController };

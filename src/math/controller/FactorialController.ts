import { Request, Response } from 'express';
import { FactorialService } from '../service/FactorialService';

class FactorialController {
  async handle(request: Request, response: Response) {
    const { number } = request.query;

    if (!number) {
      return response.status(400).json({
        result: `Parameter 'number' is mandatory.`,
      });
    }

    const result = new FactorialService().execute(number as string);

    return response.json({
      result,
    });
  }
}

export { FactorialController };

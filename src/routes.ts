import express from 'express';
import { DecimalNumberSystemController } from './math/controller/DecimalNumberSystemController';
import { FactorialController } from './math/controller/FactorialController';

const router = express.Router();

/* MATH */
router.get('/math/factorial', new FactorialController().handle);
router.get(
  '/math/decimal_number_system',
  new DecimalNumberSystemController().handle,
);

export { router };

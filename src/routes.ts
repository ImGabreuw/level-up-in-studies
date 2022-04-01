import express from 'express';
import { DecimalNumberSystemController } from './math/controller/DecimalNumberSystemController';
import { FactorialController } from './math/controller/FactorialController';
import { ScientificNotationController } from './math/controller/ScientificNotationController';

const router = express.Router();

/* MATH */
router.get('/math/factorial', new FactorialController().handle);
router.get(
  '/math/decimal_number_system',
  new DecimalNumberSystemController().handle,
);
router.get(
  '/math/scientific_notation',
  new ScientificNotationController().handle,
);

export { router };

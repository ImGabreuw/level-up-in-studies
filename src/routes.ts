import express from 'express';
import { FactorialController } from './math/controller/FactorialController';

const router = express.Router();

router.get('/math/factorial', new FactorialController().handle);

export { router };

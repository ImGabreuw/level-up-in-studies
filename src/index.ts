import express from 'express';

import { router } from './routes';

const server = express();

server.listen(3000, () => console.log('listening on port 3000'));

server.use(router);

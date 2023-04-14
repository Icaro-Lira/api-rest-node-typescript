import { Router } from 'express';

import { CidadesController } from './../controllers/cidades';

const router = Router();


router.get('/', (_, res) => {
  return res.send('Olá, Dev!');
});

// router.get('/cidades', CidadesController.create);
router.post('/cidades', CidadesController.create);





export { router };
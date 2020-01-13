import { Router, Request, Response } from 'express';
import { getAllUsers } from '../controllers/UserController';
import { getAllMessagges } from '../controllers/MessagesController';

export function routes() {
  const router = Router();

  router.get('/', (req: Request, res: Response) => {
    res.json({ hello: 'World' });
  });

  router.get('/api/users', getAllUsers);

  router.get('/api/messagges', getAllMessagges);

  return router;
}

import { Router, Request, Response } from 'express';
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/UserController';
import { getAllMessagges } from '../controllers/MessagesController';

export function routes() {
  const router = Router();

  router.get('/', (req: Request, res: Response) => {
    res.json({ hello: 'World' });
  });

  router.get('/api/users', getAllUsers);

  router.get('/api/messagges', getAllMessagges);

  router.post('/api/new/user', createUser);

  router.put('/api/update/user', updateUser);

  router.delete('/api/delete/user/:id', deleteUser);

  return router;
}

import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';
import { MessaggesController } from '../controllers/MessagesController';
import { Connection } from 'typeorm';

export function routes(connection: Connection) {
  const router = Router();

  const userController = new UserController(connection);
  const messaggesController = new MessaggesController(connection);

  router.get('/', (req: Request, res: Response) => {
    res.json({ hello: 'World' });
  });

  // GET

  router.get('/api/users', userController.getAllUsers);
  router.get('/api/users/:id', userController.getUserById);
  router.get('/api/messagges', messaggesController.getAllMessagges);

  // POST

  router.post('/api/new/user', userController.createUser);
  router.post('/api/new/messagge', messaggesController.createMessage);

  // PUT

  router.put('/api/update/user', userController.updateUser);
  router.put('/api/update/messagge', messaggesController.updateMessage);

  // DELETE

  router.delete('/api/delete/user', userController.deleteUser);
  router.delete('/api/delete/messagge', messaggesController.deleteMessage);

  return router;
}

import { getConnection } from 'typeorm';
import { User } from '../models/User';
import { Request, Response, NextFunction } from 'express';

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const users = await getConnection()
    .getRepository(User)
    .find();

  res.json(users);
  next();
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, age } = req.body;

  const user = getConnection()
    .getRepository(User)
    .create({ username, age });

  await getConnection()
    .getRepository(User)
    .save(user);

  res.redirect('/api/users');
  next();
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id, username, age } = req.body;

  try {
    await getConnection()
      .getRepository(User)
      .update(id, { username, age });
  } catch (e) {
    if (e) throw e;
  }

  res.send('User updated');

  next();
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await getConnection()
      .getRepository(User)
      .delete(id);
  } catch (e) {
    if (e) throw e;
  }

  res.send('User deleted');

  next();
}

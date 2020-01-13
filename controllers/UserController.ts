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

import { getConnection } from 'typeorm';
import { Messagges } from '../models/Messages';
import { Request, Response, NextFunction } from 'express';

export async function getAllMessagges(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const messagges = await getConnection()
    .getRepository(Messagges)
    .find();

  res.json(messagges);
  next();
}

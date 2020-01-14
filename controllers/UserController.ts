import { Connection, Repository } from 'typeorm';
import { User } from '../models/User';
import { Request, Response, NextFunction } from 'express';

export class UserController {
  private repository: Repository<User>;
  constructor(private connection: Connection) {
    this.repository = connection.getRepository(User);
  }

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.messagges', 'messagge')
      .getMany();
    return res.json(users);
  };

  public getUserById = async (req: Request, res: Response) => {
    const user = await this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.messagges', 'messagge')
      .where('user.id = :id', { id: req.params.id })
      .getMany();

    return res.json(user);
  };

  public createUser = async (req: Request, res: Response) => {
    const user = this.repository.create(req.body);

    await this.repository.save(user);

    return res.json({ ...user, status: 'User created' });
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id, username, age } = req.body;

    await this.repository.update(id, { username, age });

    return res.send('User updated');
  };

  public deleteUser = async (req: Request, res: Response) => {
    await this.repository.delete(req.body.id);

    return res.send('User deleted');
  };
}

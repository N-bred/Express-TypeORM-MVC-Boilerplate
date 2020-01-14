import { Connection, Repository } from 'typeorm';
import { Messagges } from '../models/Messages';
import { Request, Response, NextFunction } from 'express';

export class MessaggesController {
  private repository: Repository<Messagges>;
  constructor(private connection: Connection) {
    this.repository = connection.getRepository(Messagges);
  }

  public getAllMessagges = async (req: Request, res: Response) => {
    const messages = await this.repository.find();

    return res.json(messages);
  };

  public createMessage = async (req: Request, res: Response) => {
    const message = this.repository.create(req.body);

    await this.repository.save(message);

    return res.json(message);
  };

  public updateMessage = async (req: Request, res: Response) => {
    const { id, content } = req.body;
    await this.repository.update(id, { content });

    return res.send('Message updated');
  };

  public deleteMessage = async (req: Request, res: Response) => {
    await this.repository.delete(req.body.id);

    return res.send('Message deleted');
  };
}

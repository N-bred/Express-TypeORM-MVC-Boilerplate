import 'reflect-metadata';
import * as express from 'express';
import * as bp from 'body-parser';
import { ConnectionOptions, createConnection } from 'typeorm';
import { routes } from './routes/routes';

const options: ConnectionOptions = {
  type: 'sqlite',
  database: __dirname + '/db/db.sqlite',
  entities: [__dirname + '/models/*.ts'],
  synchronize: true
};

createConnection(options).then(connection => {
  const app = express();
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));
  app.use('/', routes());

  app.listen(3000, err => {
    if (err) throw err;

    console.log('listening on port 3000');
  });
});

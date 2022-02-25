import express from 'express';
import { 
  validateUsername,
  validateClasse, 
  validateLevel, 
  validatePassword,
} from './middlewares/validateUser';
import UserController from './controllers/UserController';

const app = express();

app.use(express.json());

app.post(
  '/users',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  UserController.createUser,
);

export default app;

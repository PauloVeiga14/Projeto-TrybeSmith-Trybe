import express from 'express';
import { 
  validateUsername,
  validateClasse, 
  validateLevel, 
  validatePassword,
} from './middlewares/validateUser';
import validateLogin from './middlewares/validateLogin';
import UserController from './controllers/UserController';
import validateJWT from './auth/validateJWT';
import ProductController from './controllers/ProductController';
import { validateName, validateAmount } from './middlewares/validateProduct';
import OrderController from './controllers/OrderController';
import validateOrder from './middlewares/validateOrder';

const app = express();

app.use(express.json());

app.post('/login', validateLogin, UserController.login);
app.post(
  '/users',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  UserController.createUser,
);
app.get('/products', validateJWT, ProductController.getAll);
app.post('/products', validateJWT, validateName, validateAmount, ProductController.createProduct);

app.post('/orders', validateJWT, validateOrder, OrderController.createOrder);

export default app;

import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import StatusCode from '../enums/StatusCode';
import { IUser } from '../interfaces/userInterface';
import ErrorMessages from '../enums/ErrorMessages';

const secret = 'minhasenhasecreta';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const users = await UserModel.getAll();

  const user: IUser | undefined = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (user === undefined) {
    return res.status(StatusCode.Unauthorized).json({ error: ErrorMessages.invalidLogin });
  }

  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign({ data: user.id, username }, secret, jwtConfig);
  
  return res.status(StatusCode.OK).json({ token }); 
};

// const getAll = async (_req: Request, _res: Response) => {
//   const users = await UserModel.getAll();
//   console.log(users); 
// };

// const getById = async (req: Request, _res: Response) => {
//   const { id } = req.params;

//   const user = await UserModel.getById(id);
//   console.log(user); 
// };

const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = await UserModel.createUser(user);

  const { id, username } = newUser;

  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign({ data: id, username }, secret, jwtConfig);
  
  return res.status(StatusCode.Created).json({ token }); 
};

// const updateUser = async (req: Request, _res: Response) => {
//   const { id } = req.params;
//   const user: IUserWithoutId = req.body;

//   const updated = await UserModel.updateUser(id, user);

//   console.log(updated);
// };

// const deleteUser = async (req: Request, _res: Response) => {
//   const { id } = req.params;
//   const deleted = await UserModel.deleteUser(id);

//   console.log(deleted);
// };

export default {
  // getAll,
  // getById,
  login,
  createUser,
  // updateUser,
  // deleteUser,
};
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

// import { IUserWithoutId } from '../interfaces/userInterface';

const secret = 'minhasenhasecreta';

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

  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign(newUser, secret, jwtConfig);
  
  return res.status(201).json({ token }); 
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
  createUser,
  // updateUser,
  // deleteUser,
};
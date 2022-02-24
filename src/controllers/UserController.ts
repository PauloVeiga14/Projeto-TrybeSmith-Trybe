import UserModel from '../models/UserModel';
import { IUserWithoutId } from '../interfaces/userInterface';

const getAll = async (_req: Request, _res: Response) => {
  const users = await UserModel.getAll();
  console.log(users); 
};

const getById = async (req: Request, _res: Response) => {
  const { id } = req.params;

  const user = await UserModel.getById(id);
  console.log(user); 
};

const createUser = async (req: Request, _res: Response) => {
  const user: IUserWithoutId = req.body;

  const newUser = await UserModel.createUser(user);
  console.log(newUser); 
};

export default {
  getAll,
  getById,
  createUser,
};
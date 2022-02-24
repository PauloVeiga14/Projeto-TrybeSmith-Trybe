import UserModel from '../models/UserModel';

const getAll = async (_req: Request, _res: Response) => {
  const users = await UserModel.getAll();
  console.log(users); 
};

const getById = async (req: Request, _res: Response) => {
  const { id } = req.params;

  const user = await UserModel.getById(id);
  console.log(user); 
};

export default {
  getAll,
  getById,
};
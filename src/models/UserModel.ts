import connection from './connection';

interface IUser {
  id: number,
  username: string,
  password: string,
  email: string,
}

const getAll = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Users');
  return rows as IUser[];
};

const getById = async (id: number) => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Users WHERE id=?', [id]);
  const [user] = rows as IUser[];
  return user;
};

export default {
  getAll,
  getById,
};
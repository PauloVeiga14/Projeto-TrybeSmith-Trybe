import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUserWithoutId, IUser } from '../interfaces/userInterface';

const getAll = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Users');
  return rows as IUser[];
};

// const getById = async (id: number) => {
//   const [rows] = await connection.execute('SELECT * FROM Trybesmith.Users WHERE id=?', [id]);
//   const [user] = rows as IUser[];
//   return user;
// };

const createUser = async (user: IUserWithoutId) => { 
  const { username, classe, level, password } = user;
  const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );

  return { id, username, classe, level, password };
};

// const updateUser = async (id: number, user: IUserWithoutId): Promise<IUser> => {
//   const { username, classe, level, password } = user;
//   const query = 'UPDATE Trybesmith.Users SET username=?, classe=?, level=?, password=? WHERE id=?';
//   await connection.execute(query, [username, classe, level, password, id]);

//   return { id, username, classe, level, password };
// };

// const deleteUser = async (id: number): Promise<void> => {
//   await connection.execute('DELETE FROM TrybeSmith.Users WHERE id=?', [id]);
// };

export default {
  getAll,
  // getById,
  createUser,
  // updateUser,
  // deleteUser,
};
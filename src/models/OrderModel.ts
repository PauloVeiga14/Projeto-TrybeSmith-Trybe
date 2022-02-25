import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createOrder = async (userId: number) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [userId]);

  return { id, userId };
}; 

export default {
  createOrder,  
};
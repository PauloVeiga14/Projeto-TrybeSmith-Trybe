import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, IProductWithoutId } from '../interfaces/productInterface';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows as IProduct[];
};

const createProduct = async (product: IProductWithoutId) => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );

  return { id, name, amount };
};

export default {
  getAll,
  createProduct,
};
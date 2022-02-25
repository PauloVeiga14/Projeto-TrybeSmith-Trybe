import { Request, Response } from 'express';
import ProductModel from '../models/ProductModel';
import StatusCode from '../enums/StatusCode';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductModel.getAll();
  return res.status(StatusCode.OK).json(products);
};

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const newProduct = await ProductModel.createProduct(product);

  return res.status(StatusCode.Created).json(
    {
      item: { id: newProduct.id, name: newProduct.name, amount: newProduct.amount },
    },
  );
};

export default {
  getAll,
  createProduct,
};
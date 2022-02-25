import { Request, Response } from 'express';
import ProductModel from '../models/ProductModel';
import StatusCode from '../enums/StatusCode';

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
  createProduct,
};
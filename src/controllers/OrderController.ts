import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import OrderModel from '../models/OrderModel';
import StatusCode from '../enums/StatusCode';
import ErrorMessages from '../enums/ErrorMessages';

const secret = 'minhasenhasecreta';

const createOrder = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const { products } = req.body;

  if (token === undefined) {
    return res.status(StatusCode.Unauthorized).json({ error: ErrorMessages.noToken });
  }

  const decode = jwt.verify(token, secret);

  const idUser = Object.values(decode)[0];

  const order = await OrderModel.createOrder(idUser, products);

  return res.status(StatusCode.Created).json({ order });
};

export default {
  createOrder,
};
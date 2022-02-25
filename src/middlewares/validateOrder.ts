import { Request, Response, NextFunction } from 'express';
import ErrorMessages from '../enums/ErrorMessages';
import StatusCode from '../enums/StatusCode';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;

  if (products === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noProductsKey });
  }

  if (typeof products !== 'object') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.productsIsntArray });
  }

  if (products.length < 1) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidProducts });
  }

  next();
};

export default validateOrder;
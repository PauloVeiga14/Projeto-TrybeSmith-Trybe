import { Request, Response, NextFunction } from 'express';
import ErrorMessages from '../enums/ErrorMessages';
import StatusCode from '../enums/StatusCode';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (name === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noNameKey });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.nameIsntString });
  }

  if (name.length <= 2) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidName });
  }

  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noAmountKey });
  }

  if (typeof amount !== 'string') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.amountIsntString });
  }

  if (amount.length <= 2) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidAmount });
  }

  next();
};

export {
  validateName,
  validateAmount,
};
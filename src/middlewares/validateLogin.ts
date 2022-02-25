import { Request, Response, NextFunction } from 'express';
import ErrorMessages from '../enums/ErrorMessages';
import StatusCode from '../enums/StatusCode';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (username === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noUsernameKey });
  }

  if (password === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noPasswordKey });
  }

  next();
};

export default validateLogin;
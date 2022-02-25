import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorMessages from '../enums/ErrorMessages';
import StatusCode from '../enums/StatusCode';

const secret = 'minhasenhasecreta';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (token === undefined) {
      return res.status(StatusCode.Unauthorized).json({ error: ErrorMessages.noToken });
    }

    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(StatusCode.Unauthorized).json({ error: ErrorMessages.invalidToken });
  }
};

export default validateJWT;
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'minhasenhasecreta';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const decoded = jwt.verify(token, secret);

  console.log(decoded);

  next();
};

export default {
  validateJWT,
};
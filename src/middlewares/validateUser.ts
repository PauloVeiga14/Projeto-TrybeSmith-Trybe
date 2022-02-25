import { Request, Response, NextFunction } from 'express';
import ErrorMessages from '../enums/ErrorMessages';
import StatusCode from '../enums/StatusCode';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (username === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noUsernameKey });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.usernameIsntString });
  }

  if (username.length <= 2) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidUsername });
  }

  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (classe === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noClasseKey });
  }

  if (typeof classe !== 'string') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.classeIsntString });
  }

  if (classe.length <= 2) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidClasse });
  }

  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noLevelKey });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.levelIsntNumber });
  }

  if (level <= 0) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidLevel });
  }

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(StatusCode.BadRequest).json({ error: ErrorMessages.noPasswordKey });
  }

  if (typeof password !== 'string') {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.PasswordIsntString });
  }

  if (password.length <= 7) {
    return res.status(StatusCode.Unprocessable).json({ error: ErrorMessages.invalidPassword });
  }

  next();
};

export {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};
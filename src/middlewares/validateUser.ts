import { Request, Response, NextFunction } from 'express';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (username === undefined) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }

  if (username.length <= 2) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (classe === undefined) {
    return res.status(400).json({ error: 'Classe is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(400).json({ error: 'Level is required' });
  }

  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  if (level <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  if (password.length <= 7) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};
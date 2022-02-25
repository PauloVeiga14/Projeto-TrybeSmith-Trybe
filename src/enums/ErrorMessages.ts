enum ErrorMessages {
  noUsernameKey = 'Username is required',
  noClasseKey = 'Classe is required',
  noLevelKey = 'Level is required',
  noPasswordKey = 'Password is required',
  usernameIsntString = 'Username must be a string',
  classeIsntString = 'Classe must be a string',
  PasswordIsntString = 'Password must be a string',
  levelIsntNumber = 'Level must be a number',
  invalidUsername = 'Username must be longer than 2 characters',
  invalidClasse = 'Classe must be longer than 2 characters',
  invalidPassword = 'Password must be longer than 7 characters',
  invalidLevel = 'Level must be greater than 0',
  invalidLogin = 'Username or password invalid',
}

export default ErrorMessages;
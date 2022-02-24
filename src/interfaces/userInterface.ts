export interface IUserWithoutId {
  username: string,
  classe: string,
  level: number,
  password: string,
}
  
export interface IUser extends IUserWithoutId {
  id: number
}
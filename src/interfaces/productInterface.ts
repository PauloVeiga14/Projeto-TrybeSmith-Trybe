export interface IProductWithoutId {
  name: string,
  amount: string,
}

export interface IProduct extends IProductWithoutId {
  id: number
}
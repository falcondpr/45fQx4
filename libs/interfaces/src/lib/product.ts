export default interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  images: string;
  typeId: string;
  statusProductId: string;
  saleStatusId: string;
  userId: string;
  typeAdId: string;
  createdAt: Date;
  updatedAt: Date;
}
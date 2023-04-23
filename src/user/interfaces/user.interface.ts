import { ObjectId } from 'typeorm';

export interface ITokenDTO {
  id: ObjectId;
  email: string;
  fullname: string;
}

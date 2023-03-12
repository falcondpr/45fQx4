import { Types } from 'mongoose';

export interface ITokenDTO {
  id: Types.ObjectId;
  email: string;
  fullname: string;
}

import { Types } from 'mongoose';

export interface IUserVerified {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  isVerified: {
    isValid: boolean;
    updatedAt: Date;
  };
}

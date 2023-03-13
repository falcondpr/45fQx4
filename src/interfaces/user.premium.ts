import { Types } from "mongoose"

export interface IUserPremium {
  _id: Types.ObjectId
  fullname: string
  email: string
  isPremium: {
    isValid: boolean,
    updatedAt: Date
  }
}
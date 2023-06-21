export default interface IUser {
  fullname: string;
  username: string;
  email: string;
  password: string;
  typeUserId: string;
  affiliatedId: string | null;
  genderId: string;
  avatar: string;
  banner: string;
  verifiedUserId: string | null;
  skinUserId: string | null;
  premiumUserId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByCustomEmail(id: string): Promise<TUser>;

    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;

  }
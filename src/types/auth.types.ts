import { IUser } from "./user.types";

export interface IAuthForm {
  name?: string;
  email: string;
  password: string;
}

export interface iAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

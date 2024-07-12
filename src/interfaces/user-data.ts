export interface IUser {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

export interface IUsers {
  users: IUser[];
}

// export interface IUserData {
//   user: IUser[];
// }

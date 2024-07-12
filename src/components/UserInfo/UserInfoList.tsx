import React from "react";
import { IUser } from "../../interfaces/user-data";
import Spinner from "../Spinner/Spinner";

interface UserInfoListProps {
  users: IUser[];
}

const UserInfoList: React.FC<UserInfoListProps> = ({ users }) => {
  if (!users || users.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-body">
            <h2 className="card-header">{user.name}</h2>
            <p className="text-content2">Mail: {user.email}</p>
            <p className="text-content2">Phone: {user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfoList;

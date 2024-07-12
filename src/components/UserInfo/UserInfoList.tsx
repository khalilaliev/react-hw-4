import React from "react";
import { IUser } from "../../interfaces/user-data";

interface UserInfoListProps {
  users: IUser[];
}

const UserInfoList: React.FC<UserInfoListProps> = ({ users }) => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-body">
            <h2 className="card-header">{user.name}</h2>
            <p className="text-content2">{user.email}</p>
            <p className="text-content2">{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfoList;

import { useEffect, useState } from "react";
import Title from "../Title/Title";
import { API } from "../../utils/user-api";
import UserList from "./UsersListItem";
import { IUser } from "../../interfaces/user-data";
import { USERS } from "../../constants/page-title-text";

const User: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Users not found");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="container">
        <Title text={USERS} />
        <UserList users={users} />
      </div>
    </>
  );
};

export default User;

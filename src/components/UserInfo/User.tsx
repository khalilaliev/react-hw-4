import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../utils/user-api";
import { IUser } from "../../interfaces/user-data";
import UserInfoList from "./UserInfoList";

const User = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(`${API}/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUsers([data]);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    };
    getUserData();
  }, [id]);

  return (
    <div className="container">
      <UserInfoList users={users} />
    </div>
  );
};

export default User;

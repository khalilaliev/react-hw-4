import { BUTTON_TEXT } from "../../constants/button-text";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/user-data";
import Spinner from "../Spinner/Spinner";

const UserList: React.FC<{ users: IUser[] }> = ({ users }) => {
  if (!users || users.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-body">
            <h2 className="card-header">{user.name}</h2>
            <div className="card-footer">
              <Link className="btn btn-primary" to={`/users/${user.id}`}>
                {BUTTON_TEXT}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;

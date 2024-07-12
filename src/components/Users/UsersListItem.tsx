import { BUTTON_TEXT } from "../../constants/button-text";
import { Link } from "react-router-dom";
import { IUsers } from "../../interfaces/user-data";
import Spinner from "../Spinner/Spinner";

const UserList: React.FC<IUsers> = ({ users }) => {
  if (!users || users.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {users.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h2 className="card-header">{item.name}</h2>
              <div className="card-footer">
                <Link className="btn btn-primary" to={`/users/${item.id}`}>
                  {BUTTON_TEXT}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

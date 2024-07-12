import { BUTTON_TEXT } from "../../constants/button-text";
import { IUserData } from "../../interfaces/user-data";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

const UserList: React.FC<IUserData> = ({ users }) => {
  if (!users || users.length === 0) {
    return <Spinner />;
  }

  return (
    <div className=" flex justify-center items-center gap-5 flex-wrap">
      {users.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h2 className="card-header">{item.name}</h2>
              <p className="text-content2">Mail: {item.email}</p>
              <p className="text-content2">Phone: {item.phone}</p>
              <div className="card-footer">
                <Button text={BUTTON_TEXT} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

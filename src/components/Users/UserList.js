import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = (props) => {
  return (
    <div className="container px-0">
      <div className="row justify-content-center">
        <div className="col-6 ">
          <ul className="list-group">
            {props.users.map((user) => (
              <li className="list-group-item mb-1 " key={user.id}>
                {user.username} ({user.age} years old)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;

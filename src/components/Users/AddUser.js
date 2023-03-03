import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      console.log("Please enter a valid name and age (non-empty values).");
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (age < 1) {
      console.log("Please enter a valid age (> 0).");
      seterror({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    setusername("");
    setage("");
    props.OnAddinfoHandler(username, age);
  };
  const [username, setusername] = useState("");
  const [age, setage] = useState("");
  const [error, seterror] = useState();

  const UserNameHandler = (event) => {
    setusername(event.target.value);
  };
  const Agehandler = (event) => {
    setage(event.target.value);
  };
  const Errormodalhandler = () => {
    seterror(null);
  };
  return (
    <>
      <div className="container-fluid bg-secondary ">
        <div className="row">
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={Errormodalhandler}
            />
          )}
        </div>
        <div className="row">
          <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={UserNameHandler}
              />
              <label htmlFor="age">Age (Years)</label>
              <input id="age" type="number" value={age} onChange={Agehandler} />
              <Button type="submit">Add User</Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddUser;

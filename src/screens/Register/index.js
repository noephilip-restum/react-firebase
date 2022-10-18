import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLoadingUsers, startAddEditUser } from "../../redux/usersAction";
import { validateEmail, emailChecker } from "../../redux/main";
import "./register.scss";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    dispatch(startLoadingUsers());
  }, [dispatch]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!user.fullName) {
      alert("Please enter your full name");
      return false;
    } else if (!user.email) {
      alert("Please enter your email");
      return false;
    } else if (!validateEmail(user?.email)) {
      alert("Please enter a valid email");
      return false;
    } else if (!emailChecker(users, user)) {
      alert("Email already existing");
      return false;
    }
    let userData = {
      id: Number(new Date()),
      ...user,
    };
    dispatch(startAddEditUser(userData, "add"));
    navigate("/");
  };

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="reg-container">
          <h1>Register</h1>
          <div className="reg-form-container">
            <div className="login-form">
              <label className="input-label">Full Name</label>
              <input
                type="text"
                className="input-style"
                name="fullName"
                id="fullName"
                placeholder="Anne Hunter"
                value={user?.fullName}
                onChange={changeHandler}
              />
            </div>
            <div className="login-form">
              <label className="input-label">Email</label>
              <input
                type="text"
                className="input-style"
                name="email"
                id="email"
                placeholder="anne.hunter@gmail.com"
                value={user?.email}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button className="reg-button-style" type="submit" value="register">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

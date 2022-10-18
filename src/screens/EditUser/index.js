import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingUsers, startAddEditUser } from "../../redux/usersAction";
import { emailChecker, validateEmail } from "../../redux/main";
import { useParams, useNavigate } from "react-router-dom";
import "./edit-user.scss";

export const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  let filterUser = [];
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(startLoadingUsers());
  }, [dispatch, id]);

  useEffect(() => {
    // eslint-disable-next-line
    filterUser = users.filter((user) => user.id === parseInt(id));
    setUser(
      filterUser[0]
        ? filterUser[0]
        : {
            fullName: "",
            email: "",
          }
    );
  }, [users]);

  const handleSubmit = async (event) => {
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
      id: user?.id,
      fullName: user?.fullName,
      email: user?.email,
    };
    dispatch(startAddEditUser(userData, "edit"));
    navigate("/");
  };

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="edit-form-container">
        <h2 className="edit-title">Edit User Information</h2>
        <div className="login-edit-container">
          <div className="login-form">
            <label className="edit-input-label">Full Name</label>
            <input
              type="text"
              className="edit-input-style"
              name="fullName"
              id="fullName"
              value={user?.fullName}
              onChange={changeHandler}
            />
          </div>
          <div className="login-form">
            <label className="edit-input-label">Email</label>
            <input
              type="text"
              className="edit-input-style"
              name="email"
              id="email"
              value={user?.email}
              onChange={changeHandler}
            />
          </div>
        </div>
        <button
          className="edit-button-style"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </button>
      </div>
    </>
  );
};

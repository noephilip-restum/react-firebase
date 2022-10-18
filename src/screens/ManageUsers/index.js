import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingUsers, startDeletingUser } from "../../redux/usersAction";
import { Link } from "react-router-dom";
import "./manage-users.scss";
import "../../assets/styles/table.scss";

import { DeleteModal } from "../../components";

export const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    dispatch(startLoadingUsers());
  }, [dispatch]);

  const handleDelete = (selectedUser) => {
    dispatch(startDeletingUser(selectedUser));
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="content-container">
        <h1 className="tab-title">Users</h1>
        <div className="table-container">
          <table className="user-list-table">
            <thead>
              <tr>
                <th className="table-header">Name</th>
                <th className="table-header table-text-align">User Email ID</th>
                <th className="table-header"></th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {users?.map((user, index) => (
                <tr key={index}>
                  <td>{user.fullName}</td>
                  <td className="table-text-align">{user.email}</td>
                  <td className="table-text-align">
                    <Link to={`/edit-user/${user.id}`} className="edit-text">
                      Edit
                    </Link>{" "}
                    |
                    <span
                      onClick={() => {
                        handleModal();
                        setSelectedUser({ id: user?.id, index: index });
                      }}
                    >
                      {" "}
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Link to="/register">
                    <button className="doc-button-style">+ Add User</button>
                  </Link>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <DeleteModal
          title={"Confirm User Deletion"}
          handleModal={handleModal}
          handleDelete={handleDelete}
          selectedUser={selectedUser}
        />
      )}
    </>
  );
};

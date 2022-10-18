import { NavLink } from "react-router-dom";
import "../../assets/styles/tab.scss";

export const Nav = () => {
  return (
    <div className="tab">
      <NavLink to="/group-chat" className="tablinks" activeclassname="active">
        <div className="link-text-tab">Group Chat</div>
      </NavLink>
      <NavLink to="/" className="tablinks" activeclassname="active">
        <div className="link-text-tab">Manage Users</div>
      </NavLink>
      <NavLink to="/doc-list" className="tablinks" activeclassname="active">
        <div className="link-text-tab">Manage Documents</div>
      </NavLink>
      <NavLink to="/logout" className="tablinks" activeclassname="active">
        <div className="link-text-tab">Logout</div>
      </NavLink>
    </div>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, ManageUsers, EditUser } from "./screens";
import { SharedLayout, PageNotFound } from "./components";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<ManageUsers />} />
            <Route path="edit-user/:id" element={<EditUser />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

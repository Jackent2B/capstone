import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ListUser from "./Components/User/ListUser";
import EditUser from "./Components/User/EditUser";
import AddUser from "./Components/User/AddUser";
import Header from "./Components/Header/Header";

function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      <h2>This is a crud app</h2>
      {localData ? <Header /> : ""}
      {/* {!isLogged ? <Login /> : ""} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

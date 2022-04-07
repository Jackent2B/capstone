import { useDispatch, useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullname, useremail, usergender, userpassword, userphone } =
    useSelector((state) => state);

  const nameChanged = (e) => {
    dispatch({ type: "fullname", value: e.target.value });
  };

  const passwordChanged = (e) => {
    dispatch({ type: "userpassword", value: e.target.value });
  };
  const emailChanged = (e) => {
    dispatch({ type: "useremail", value: e.target.value });
  };
  const phoneChanged = (e) => {
    dispatch({ type: "userphone", value: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    UserService.postUser({
      fullname: fullname,
      email: useremail,
      gender: usergender,
      password: userpassword,
      phone: userphone,
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        navigate("/list");
      }
    });
  };
  return (
    <div className="container m-2">
      <h3>Create New user</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="form-control"
            placeholder="Enter FullName"
            value={fullname}
            onChange={nameChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            value={useremail}
            onChange={emailChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={userpassword}
            onChange={passwordChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="Enter Phone No"
            value={userphone}
            onChange={phoneChanged}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Male"
              checked={usergender === "Male"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />

            <label htmlFor="gender" className="form-check-lable">
              Male
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Female"
              checked={usergender === "Female"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />
            <label htmlFor="gender" className="form-check-lable">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="gender"
              id="gender"
              className="form-check-input"
              value="Others"
              checked={usergender === "Others"}
              onChange={(e) => {
                dispatch({ type: "usergender", value: e.target.value });
              }}
            />
            <label htmlFor="gender" className="form-check-lable">
              Others
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Add User" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

export default function Loginstatus() {
  const { auth } = useContext(AuthContext);
  const { fullname, id, email, createAt } = auth.user;
  const navigate = useNavigate();
  const {
    handleLogout,
    auth: { isAuthenticate },
  } = useContext(AuthContext);
  const onHandleLogout = () => {
    localStorage.removeItem("accessToken");
    handleLogout();
    navigate("/login");
  };
  return (
    <>
      <div className="nav_res_login">
        {!isAuthenticate && (
          <div className="register-button btn btn-dark">
            <Link
              className=" text-decoration-none"
              to="/register"
              style={{ color: "white" }}
            >
              Register
            </Link>
          </div>
        )}

        {!isAuthenticate && (
          <div className="login-button btn btn-dark ms-1">
            <Link
              to="/login"
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Login
            </Link>
          </div>
        )}
        {isAuthenticate && (
          <div className="d-flex">
            <div className="pt-1 fs-6 me-3 text-capitalize">
              Hello, {fullname}!
            </div>
            <div className="btn btn-dark">
              <Link
                to="/profile"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Account
              </Link>
            </div>
          </div>
        )}
        {isAuthenticate && (
          <div className="btn btn-dark">
            <Link
              onClick={onHandleLogout}
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

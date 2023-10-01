import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import authAPI from "../../apis/authAPI";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  const { isAuthenticate } = auth;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);
        await authAPI.register(values);

        console.log(values);
        navigate("/login");
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const { handleSubmit, handleChange, values } = formik;
  if (isAuthenticate) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="d-flex pt-5 pb-2 align-items-center justify-content-center bg-dark-subtle login-container">
      <div
        className="container d-flex align-items-center justify-content-center mt-5 bg-white w-50"
        style={{ height: "500px" }}
      >
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="fs-2 fw-bold mb-2">Register New Account</div>
          <div className="form-item mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              name="fullname"
              id="fullname"
              onChange={handleChange}
              value={values.fullname}
            ></input>
          </div>
          <div className="form-item mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            ></input>
          </div>
          <div className="form-item mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            ></input>
          </div>
          
          {error && <p style={{ color: "red", margin: "10px 0" }}>{error}</p>}
          <button className="btn btn-dark mt-3" type="submit">
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;

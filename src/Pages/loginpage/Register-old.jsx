import { useState } from "react";
import imglogin from "../../Pages/Homepage/modeNiture-big.png";
const initCredential = { email: "", password: "", confirm_password: "" };

// onSubmit={handleFormSubmit}
export default function Register() {
  const [credential, setCredential] = useState(initCredential);

  const [ispassincorrect, setispassincorrect] = useState(false);

  const [isemailexists, setisemailexists] = useState(false);

  const [isregistered, setisregistered] = useState(false);

  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này
  const handleInputChange = (event) => {
    setispassincorrect(false);
    setisemailexists(false);
    setisregistered(false);
    // console.log( event.target.name+"//"+event.target.value);
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };
  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(credential.email + "//" + credential.password  + "//" + credential.confirm_password)
    if (credential.password !== credential.confirm_password) {
      setispassincorrect(true);
    } else {
      const checkemail = async () => {
        const url_login =
          "https://tuongdoirong.com/api/node.php?f=outdata&up_gt=SELECT email FROM login WHERE email='" +
          credential.email +
          "'&cot=email&database=mindx";
        const response = fetch(url_login);
        response
          .then((response) => response.json())
          .then((data) => {
            // check call API email

            if (data.kq === "0") {
              // alert("không tồn tại email trên dataasse")
              const Signup = async () => {
                const url_singn =
                  "https://tuongdoirong.com/api/node.php?f=inst&database=mindx&mytable=login&cot=email,password&gt='" +
                  credential.email +
                  "','" +
                  credential.password +
                  "'";
                const response = fetch(url_singn);
                response
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data fetch", data.kq);
                    if (data.kq === "1") {
                      // alert("Đã đăng ký tài khoản thành công")
                      setisregistered(true);
                    } else {
                      alert("Đăng ký thất bại");
                    }
                  });
              };

              Signup();
            } else {
              setisemailexists(true);
              // alert(" email trên dataasse đã tồn tại")
            }
            // console.log("data fetch", data.kq);
          });
      };

      checkemail();
    }

    // TODO: call API để login
    // sau khi nhấp chuột vào button để đăng ký tài khoản thì nó gọi hàm này sau khi kiểm tra
    // định dạng email có phù hợp hay không
    // các giá trị nhận được là : credential.email   và  credential.password
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-dark-subtle">
      {/* , paddingBottom: "100px" style={{ paddingTop: "100px"}} */}
      {/* thay đổi 2 */}
      <div className="container mt-5">
        <div
          className="row bg-white d-flex align-items-center justify-content-center"
          style={{ width: "100%px" }}
        >
          {/* bg-primary */}

          <div
            className="d-flex justify-content-center"
            style={{ height: "100px", width: "auto" }}
          >
            <img className="logo" src={imglogin} alt="" />
          </div>

          <div className="" style={{ width: "1100px", height: "450px" }}>
            <form onSubmit={handleFormSubmit}>
              {/* <div style={{ width: "380px", height: "200px" }}>
                <img
                  className="mb-4 logo" style={{ width: "100%", height: "100%" }}
                  src={imglogin}
                  alt=""
                />
              </div> */}
              <h1 className="h3 mb-3 fw-semibold">Please Register</h1>

              {isemailexists && (
                <h1 className="" style={{ color: "red" }}>
                  Email already exists
                </h1>
              )}
              <div style={{ color: "red" }}>Email address *</div>
              <div className="form-floating">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  // placeholder="name@example.com"
                  value={credential.email}
                  name="email"
                  onChange={handleInputChange}
                />
                {/* <label htmlFor="floatingInput">Email address</label> */}
              </div>

              <div className="form-floating mt-4">
                <div style={{ color: "red" }}>Password *</div>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  // placeholder="Password"
                  value={credential.password}
                  name="password"
                  onChange={handleInputChange}
                />

                {/* <label htmlFor="floatingPassword">Password</label> */}
              </div>

              <div className="mt-4">
                <div style={{ color: "red" }}>Confirm password *</div>
                <input
                  required
                  style={{ height: "60px" }}
                  type="password"
                  className="form-control"
                  // placeholder="confirm password"
                  value={credential.confirm_password}
                  name="confirm_password"
                  onChange={handleInputChange}
                />
              </div>
              {ispassincorrect && (
                <div style={{ color: "red" }}>Password incorrect</div>
              )}

              {isregistered && (
                <div style={{ color: "blue" }}>
                  Successfully registered account
                </div>
              )}

              <button
                className="mt-4 w-100 btn btn-lg btn-primary bg-dark"
                style={{ color: "white" }}
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { register } from "../../features/auth/authSlice";
import { accountModalSlice } from '../../features/helpers/accountModalSlice'

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { username, email, password, cpassword } = formData;

  const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess || user) {
  //     dispatch(accountModalSlice.reset())
  //     navigate("/");
  //   }
  //   dispatch(reset());
  // }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = { username, email, password };
      dispatch(register(userData));
    }
  };

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <>
      <div className="account-container">
        <div className="acc-overlay"></div>
        <div className="account-content">
          <section className="heading">
            <h1>Join ReviewDB</h1>
            <FaTimes onClick={() => {
              dispatch(accountModalSlice.actions.updateRegistry())
            }}/>
          </section>
          <section className="form">
            <form className="form-group" onSubmit={onSubmit}>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                placeholder="enter a username"
                onChange={onChange}
              />
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="enter an email address"
                onChange={onChange}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="set a password"
                onChange={onChange}
              />
              <label>Confirm password</label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                value={cpassword}
                placeholder="confirm password"
                onChange={onChange}
              />
              <div className="form-group">
                <button type="submit" className="btn-submit">
                  Register
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register;

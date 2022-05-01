import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { login } from "../../features/auth/authSlice";
import { accountModalSlice } from "../../features/helpers/accountModalSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess || user) {
  //     dispatch(accountModalSlice.reset());
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
    const userData = { email, password };
    dispatch(login(userData));
  };

  const { email, password } = formData;

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }

  return (
    <>
      <div className="account-container">
        <div className="acc-overlay"></div>
        <div className="account-content">
          <section className="heading">
            <h1>Come aboard</h1>
            <FaTimes
              onClick={() => {
                dispatch(accountModalSlice.actions.updateLogin());
              }}
            />
          </section>
          <section className="form">
            <form className="form-group" onSubmit={onSubmit}>
            <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="enter your email address"
                onChange={onChange}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="enter your password"
                onChange={onChange}
              />
              <div className="form-group">
                <button type="submit" className="btn-submit">
                  Get in
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;

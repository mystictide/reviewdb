import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/spinner";
import { loginmodalSlice } from '../../features/helpers/loginmodalSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

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

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <div className="account-container">
        <div className="acc-overlay"></div>
        <div className="account-content">
        <section className="heading">
            <h1>Join ReviewDB</h1>
            <FaTimes onClick={() => {
              dispatch(loginmodalSlice.actions.update())
            }}/>
          </section>
          <section className="form">
            <form className="form-group" onSubmit={onSubmit}>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="enter an email address"
                onChange={onChange}
              />
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="set a password"
                onChange={onChange}
              />
              <div className="form-group">
                <button type="submit" className="btn-submit">
                  Submit
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

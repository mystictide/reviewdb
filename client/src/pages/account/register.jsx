import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from '../../components/spinner'

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { username, email, password, cpassword } = formData;

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
    if (password !== cpassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = { username, email, password };
      dispatch(register(userData));
    }   
  };

  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account</p>
      </section>
      <section className="form">
        <form className="form-group" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            placeholder="enter a usernme"
            onChange={onChange}
          />
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
            Submit
          </button>
        </div>
        </form>
      </section>
    </>
  );
}

export default Register;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { register } from "../../features/auth/authSlice";
import { accountModalSlice } from "../../features/helpers/accountModalSlice";
import {
  checkExistingMail,
  checkExistingUsername,
} from "../../features/auth/validationSlice";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formValidation, setFormValidation] = useState({
    vUsername: false,
    vEmail: false,
    vPassword: true,
  });

  const { username, email, password } = formData;
  const { vUsername, vEmail, vPassword } = formValidation;
  const { usernameValidated, emailValidated } = useSelector(
    (state) => state.validation
  );

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setTimeout(() => {
      validateFields(e);
    }, 1500);
  };

  const validateFields = (e) => {
    if (e.target.name === "username") {
      if (e.target.value.length > 0) {
        dispatch(checkExistingUsername(e.target.value));
        if (usernameValidated) {
          setFormValidation((prevState) => ({
            ...prevState,
            vUsername: true,
          }));
        }
        else {
          setFormValidation((prevState) => ({
            ...prevState,
            vUsername: false,
          }));
        }
      }
    }
    if (e.target.name === "email") {
      if (e.target.value.length > 0) {
        dispatch(checkExistingMail(e.target.value));
        if (emailValidated) {
          setFormValidation((prevState) => ({
            ...prevState,
            vEmail: true,
          }));
        }
        else {
          setFormValidation((prevState) => ({
            ...prevState,
            vEmail: false,
          }));
        }
      }
    }
    if (e.target.name === "password") {
      if (e.target.value.length > 6) {
        setFormValidation((prevState) => ({
          ...prevState,
          vPassword: false,
        }));
      } else {
        setFormValidation((prevState) => ({
          ...prevState,
          vPassword: true,
        }));
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { username, email, password };
    dispatch(register(userData));
  };

  return (
    <>
      <div className="account-container">
        <div className="acc-overlay"></div>
        <div className="account-content">
          <section className="heading">
            <h1>Join ReviewDB</h1>
            <FaTimes
              onClick={() => {
                dispatch(accountModalSlice.actions.updateRegistry());
              }}
            />
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
              {vUsername ? (
                <label className="error">Username already exists</label>
              ) : (
                ""
              )}
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
              {vEmail ? (
                <label className="error">
                  Email address already registered
                </label>
              ) : (
                ""
              )}
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
              {vPassword ? (
                <label className="error">
                  Password requires more than 6 characters
                </label>
              ) : (
                ""
              )}
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

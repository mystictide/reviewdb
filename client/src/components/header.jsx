import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import RegisterModal from "./account/register";
import LoginModal from "./account/login";
import { registrymodalSlice } from '../features/helpers/registrymodalSlice'
import { loginmodalSlice } from '../features/helpers/loginmodalSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loginModalState } = useSelector((state) => state.loginModal);
  const { registryModalState } = useSelector((state) => state.registryModal);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">Review Database</Link>
          </div>
          <ul>
            {user ? (
              <li>
                <button onClick={onLogout}>LOGOUT</button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => {
                      dispatch(loginmodalSlice.actions.update());
                    }}
                  >
                    LOGIN
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => {
                        dispatch(registrymodalSlice.actions.update());
                      }}
                  >
                    REGISTER
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {loginModalState ? <LoginModal /> : ""}
      {registryModalState ? <RegisterModal /> : ""}
    </>
  );
};

export default Header;

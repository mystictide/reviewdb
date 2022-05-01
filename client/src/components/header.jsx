import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import { FaAngleDown } from "react-icons/fa";
import RegisterModal from "./account/register";
import LoginModal from "./account/login";
import UserDropDown from "./user/userDropdown";
import {
  accountModalSlice,
  resetState,
} from "../features/helpers/accountModalSlice";
import { dropdownSlice } from "../features/helpers/dropdownSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { loginModalState, registryModalState } = useSelector(
    (state) => state.accountModal
  );
  const { userDropdownState } = useSelector((state) => state.dropdown);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      dispatch(resetState());
      navigate("/");
    }
    dispatch(reset());
  }, [
    user,
    isError,
    isSuccess,
    message,
    loginModalState,
    registryModalState,
    userDropdownState,
    navigate,
    dispatch,
  ]);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">Review Database</Link>
          </div>
          <ul>
            {user ? (
              <>
                <li
                  onMouseLeave={() => {
                    dispatch(dropdownSlice.actions.resetDropdownState());
                  }}
                >
                  <button
                    onClick={() => {
                      dispatch(dropdownSlice.actions.updateUserDropdownState());
                    }}
                    onMouseEnter={() => {
                      dispatch(dropdownSlice.actions.updateUserDropdownState());
                    }}
                  >
                    {user.username.toUpperCase()} <FaAngleDown />
                  </button>
                  {userDropdownState ? <UserDropDown /> : ""}
                </li>
                <li>
                  <button>LATEST</button>
                </li>
                <li>
                  <button>FRIENDS</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => {
                      dispatch(accountModalSlice.actions.updateLogin());
                    }}
                  >
                    LOGIN
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      dispatch(accountModalSlice.actions.updateRegistry());
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

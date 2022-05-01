import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { resetDropdownState } from "../../features/helpers/dropdownSlice";

function UserDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDropdownState } = useSelector((state) => state.dropdown);

  useEffect(() => {
    dispatch(reset());
  }, [userDropdownState, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetDropdownState());
    navigate("/");
  };

  return (
    <div className="user-dropdown">
      <div className="dropdown-content">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li onClick={onLogout}>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;

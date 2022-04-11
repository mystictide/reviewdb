import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Review Database</Link>
        </div>
        <ul>
          {user ? (
            // <li>
            //   <button onClick={onLogout}>
            //     {/* <FaSignOutAlt /> */}
            //     LOGOUT
            //   </button>
            // </li>
             <li>
             <button onClick={onLogout}>
               LOGOUT
             </button>
           </li>
          ) : (
            <>
              <li>
                <Link to="/account/login">
                  {/* <FaSignInAlt /> */}
                  LOGIN
                </Link>
              </li>
              <li>
                <Link to="/account/register">
                  {/* <FaUser /> */}
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

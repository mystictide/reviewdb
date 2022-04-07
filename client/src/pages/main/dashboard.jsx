import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user) {
      navigate("/account/login");
    }
  }, [user, navigate, dispatch]);

  return <div>dashboard</div>;
}

export default Dashboard;
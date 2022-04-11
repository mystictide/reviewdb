import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Opener from "../../components/main/opener";
import FilmBox from "../../components/main/filmBox";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {}, [user, navigate, dispatch]);

  if (user) {
    return <Dashboard></Dashboard>;
  }
  return (
    <>
      <Opener />
      <FilmBox />
    </>
  );
}

export default Home;

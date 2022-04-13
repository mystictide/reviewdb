import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Opener from "../../components/main/opener";
import FilmBox from "../../components/main/filmBox";
import ArtistsBox from "../../components/main/artistBox";

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
      <ArtistsBox />
    </>
  );
}

export default Home;

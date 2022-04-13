import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Opener from "../../components/main/opener";
import FilmBox from "../../components/main/filmBox";
import ArtistsBox from "../../components/main/artistBox";
import GameBox from "../../components/main/gameBox";

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
      <GameBox />
    </>
  );
}

export default Home;

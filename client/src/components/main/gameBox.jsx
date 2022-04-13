import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularGames } from "../../features/game/gameSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import { ReactComponent as Twitch } from "../../content/img/logo/TwitchExtrudedWordmarkPurple.svg";

function GameBox() {
  const dispatch = useDispatch();
  const { games, isLoading } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(getPopularGames());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Popular Games from</h3>
        <a href="https://twitch.tv/" target="_blank" rel="noreferrer">
          <Twitch />
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {games?.map((game) => (
          <Fragment key={game.id}>
            <div className="box">
              <div>
                <img
                  loading="lazy"
                  alt={game.name}
                  src={game.box_art_url}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default GameBox;

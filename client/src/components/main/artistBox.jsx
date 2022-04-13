import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularArtists } from "../../features/music/musicSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import SpotifyLogo from "../../content/img/logo/Spotify_Logo_RGB_Green.png";
function ArtistBox() {
  const dispatch = useDispatch();
  const { artists, isLoading } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(getPopularArtists());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Popular Artists from</h3>
        <a href="https://www.spotify.com/" target="_blank" rel="noreferrer">
          <img loading="lazy" alt="spotify logo" src={SpotifyLogo} />
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {artists?.map((artist) => (
          <Fragment key={artist.id}>
            <div className="box">
              <div>
                <img
                  loading="lazy"
                  alt={artist.name}
                  src={artist.images[0].url}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default ArtistBox;

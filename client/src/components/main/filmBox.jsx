import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularFilms } from "../../features/film/filmSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import { ReactComponent as TMDB } from "../../content/img/logo/tmdb.svg";

function FilmBox() {
  const dispatch = useDispatch();
  const { films, isLoading } = useSelector((state) => state.film);

  useEffect(() => {
    dispatch(getPopularFilms());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Popular Films from</h3>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <TMDB />
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {films?.map((film) => (
          <Fragment key={film.id}>
            <div className="box">
              <div>
                <img
                  loading="lazy"
                  alt={film.title}
                  src={"https://image.tmdb.org/t/p/original" + film.poster_path}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default FilmBox;

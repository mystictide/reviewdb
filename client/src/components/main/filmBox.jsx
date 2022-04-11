import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularFilms } from "../../features/film/filmSlice";
import ScrollContainer from "react-indiana-drag-scroll";

function FilmBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { films, isLoading } = useSelector((state) => state.film);

  useEffect(() => {
    dispatch(getPopularFilms());
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="popular-container">
      <ScrollContainer className="scroll-container film-container">
          {films?.map((film) => (
            <Fragment key={film.id}>
              <div className="box">
                <div>
                  <img
                    loading="lazy"
                    alt={film.title}
                    src={
                      "https://image.tmdb.org/t/p/original" + film.poster_path
                    }
                  ></img>
                </div>
                {/* <div>{film.title}</div> */}
              </div>
            </Fragment>
          ))}
      </ScrollContainer>
    </div>
  );
}

export default FilmBox;

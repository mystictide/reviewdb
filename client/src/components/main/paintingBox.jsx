import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPaintings } from "../../features/art/paintingSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import { ReactComponent as Artvee } from "../../content/img/logo/artvee.svg";

function PaintingBox() {
  const dispatch = useDispatch();
  const { paintings, isLoading } = useSelector((state) => state.painting);

  useEffect(() => {
    dispatch(getRandomPaintings());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Classical Art from</h3>
        <a href="https://artvee.com/" target="_blank" rel="noreferrer">
          <Artvee className="artvee"/>
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {paintings?.map((painting) => (
          <Fragment key={painting.id}>
            <div className="box">
              <div>
                <img
                  loading="lazy"
                  alt={painting.title}
                  src={painting.image_url}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default PaintingBox;

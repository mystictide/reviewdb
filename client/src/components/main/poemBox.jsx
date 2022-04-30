import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPoems } from "../../features/art/poemSlice";
import ScrollContainer from "react-indiana-drag-scroll";

function PoemBox() {
  const dispatch = useDispatch();
  const { poems, isLoading } = useSelector((state) => state.poem);

  useEffect(() => {
    dispatch(getRandomPoems());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Selection of Poems from</h3>
        <a href="https://poetrydb.org/" target="_blank" rel="noreferrer">
          <h2>PoetryDB</h2>
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {poems?.map((poem) => (
          <Fragment key={poem.author}>
            <div className="box">
              <div className="poem">
                <h2>{poem.author}</h2>
                <h4>{poem.title}</h4>
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default PoemBox;

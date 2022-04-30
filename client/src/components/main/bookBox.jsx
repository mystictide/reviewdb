import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomBooks } from "../../features/book/bookSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import { ReactComponent as OL } from "../../content/img/logo/openlibrary.svg";

function BookBox() {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getRandomBooks());
  }, []);

  if (isLoading) {
    return <div className="loading">loading</div>;
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3>Selection of Books from</h3>
        <a href="https://openlibrary.org/" target="_blank" rel="noreferrer">
          <OL className="olibrary"/>
        </a>
      </div>
      <ScrollContainer
        className="scroll-container box-container"
        vertical={false}
        hideScrollbars={true}
      >
        {books?.map((book) => (
          <Fragment key={book.id}>
            <div className="box">
              <div>
                <img
                  loading="lazy"
                  alt={book.title}
                  src={book.cover.large}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default BookBox;

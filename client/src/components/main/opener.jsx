import { useDispatch } from "react-redux";
import { accountModalSlice } from "../../features/helpers/accountModalSlice";


const Opener = () => {
  const dispatch = useDispatch();

  return (
    <div className="opener-container">
      <div className="opener-bg">
        <div className="bg-img"></div>
      </div>
      <div className="opener-welcome">
        <p>
          The social database for your thoughts on all kinds of art and media
          <span>
            <button
              onClick={() => {
                dispatch(accountModalSlice.actions.updateRegistry());
              }}
            >
              Join in
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Opener;

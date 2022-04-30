import { Link } from "react-router-dom";

const Opener = () => {
   return (
    <div className="opener-container">
      <div className="opener-bg">
        <div className="bg-img"></div>
      </div>
      <div className="opener-welcome">
        <p>
          The social database for your thoughts on all kinds of art and media
          <span>
            <Link to="/account/register">Join in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Opener;

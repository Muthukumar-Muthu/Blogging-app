import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "../profile/Profile";

const Header = ({ submitHandler }) => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <header
      style={{
        marginInline: "0.2em",
      }}
      className="header"
    >
      <Link to={"/"}>
        <img src="/assests/logo.png" className="logo" alt="" />
      </Link>
      <button className="cancel" onClick={goBack}>
        Go back
      </button>
      <button className="publish" onClick={submitHandler}>
        Publish
      </button>

      <div className="center">
        <Profile position={"bottom"} />
      </div>
    </header>
  );
};
export default Header;

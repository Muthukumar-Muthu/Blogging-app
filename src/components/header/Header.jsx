import { FaGripVertical, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profile from "../profile/Profile";

const Header = ({ submitHandler }) => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <header className="header">
      <img src="assests/logo.png" className="logo" alt="" />
      <button className="cancel" onClick={goBack}>
        Go back
      </button>
      <button className="publish" onClick={submitHandler}>
        Publish
      </button>
      <FaGripVertical className="icon" />
      <FaBell className="icon" />
      <div className="center">
        <Profile position={"bottom"} />
      </div>
    </header>
  );
};
export default Header;

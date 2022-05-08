import "./style.css";
import { getUserPhoto } from "../../firebase/firebase-config";
const Body = () => {
  return (
    <div className="body">
      <h2>About You</h2>

      <div className="flex-row">
        <div className="left">
          <h3>Name</h3>
          <input
            readOnly
            spellCheck="false"
            type="text"
            value={"Muthukumar M"}
          />
        </div>
        <div className="">
          <button>save</button>
          <button>edit</button>
        </div>
      </div>
      <div className="flex-row">
        <div
          style={{
            width: "70%",
          }}
          className="left"
        >
          <h3>Short Bio</h3>
          <p className="input" contentEditable="true" spellCheck="false">
            Muthu kumar M Lorem ipsum dolor sit amet, consectetur
            adipisicingelit. Provident solutaecati veritatis sed nesciunt
            deserunt repellat qui quasi?
          </p>
        </div>
        <div>
          <div>
            <button>save</button>
            <button>edit</button>
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="left">
          <h3>Photo</h3>
          <div className="user-image">
            <img src={getUserPhoto()} alt="" />
          </div>
        </div>
        <div>
          <button>save</button>
          <button>edit</button>
        </div>
      </div>
      <div>
        <h3>Username & URL</h3>
        <div>
          <div className="user-name">
            <h3>Username</h3>
            <span>Muthu kumar M</span>
          </div>
          <div className="url">
            <h3>URL</h3>
            <span>Muthu kumar M</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;

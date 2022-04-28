import { useState } from "react";

const Profile = ({ localUserObj }) => {
  const [edit, setEdit] = useState(false);
  function fun(input) {
    if (edit) return <input type="text" value={input} />;
    else return input;
  }
  const editHandler = () => {
    setEdit(true);
  };
  const saveHandler = () => {
    setEdit(false);
  };
  const { name, blogsCount, starredCount } = localUserObj;
  return (
    <div className="profile">
      <div>
        <span className="label">Name :</span>
        <span className="background-lightgrey">{fun(name)}</span>
      </div>
      <div>
        <span className="label">No.of Blogs :</span>
        <span className="background-lightgrey">{fun(blogsCount)}</span>
      </div>
      <div>
        <span className="label">starred :</span>
        <span className="background-lightgrey">{fun(starredCount)}</span>
      </div>
      {edit ? (
        <button onClick={saveHandler}>Save</button>
      ) : (
        <button onClick={editHandler}>Edit</button>
      )}
    </div>
  );
};
export default Profile;

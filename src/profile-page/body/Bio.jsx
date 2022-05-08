import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

import captilize from "../../utils/captilize";
import { db, getUserId } from "../../firebase/firebase-config";

const Bio = () => {
  const [edit, setEdit] = useState(false);
  const [bio, setBio] = useState("");
  function save(event) {
    setBioDb();
    setEdit(false);
  }
  function cancel(event) {
    setEdit(false);
  }
  async function getBioDb() {
    try {
      const bioDoc = await getDoc(doc(db, `users/${getUserId()}/`));
      const { bio } = bioDoc.data();
      !bio ? setBio("") : setBio(bio);
    } catch (error) {
      console.error(error);
    }
  }
  async function setBioDb() {
    const formatted = captilize(bio);
    try {
      await setDoc(doc(db, `users/${getUserId()}/`), { bio: formatted });
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    getBioDb();
  }, []);

  return (
    <div className="flex-row">
      <div
        style={{
          width: "70%",
        }}
        className="left"
      >
        <h3>Short Bio</h3>
        {edit ? (
          <input
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        ) : (
          <p className="input" contentEditable={edit} spellCheck="false">
            {bio}
          </p>
        )}
      </div>
      <div>
        <div>
          {edit ? (
            <>
              <button onClick={save}>save</button>
              <button onClick={cancel}>cancel</button>
            </>
          ) : (
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Bio;

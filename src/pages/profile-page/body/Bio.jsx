import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

import captilize from "../../../functions/captilize";
import { getUserId } from "../../../firebase/authentication/userDetails";
import { db } from "../../../firebase/configuration/firebase-config";

const Bio = () => {
  const [edit, setEdit] = useState(false);
  const [bio, setBio] = useState("");
  function save() {
    if (bio.trim().length === 0) {
      alert(`bio is empty can't update`);
      console.warn(`bio is empty can't update`);
      setBio("");
    } else {
      setBioDb();
      setEdit(false);
    }
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
      await updateDoc(doc(db, `users/${getUserId()}/`), {
        bio: formatted,
        userProfileCompleted: true,
      });
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

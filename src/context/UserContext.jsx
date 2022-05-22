import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configuration/firebase-config";
import { getUserDetails } from "../firebase/firestore/getUserDetails";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setPending(false);
      if (user) {
        getUserDetails("userProfileCompleted").then((completeStatus) => {
          console.log(completeStatus);
          setIsCompleted(completeStatus);
        });
      }
    });
  }, []);

  if (pending) return <h1>Loading..</h1>;
  return (
    <userContext.Provider
      value={{ user, setUser, isCompleted, setIsCompleted }}
    >
      {children}
    </userContext.Provider>
  );
};

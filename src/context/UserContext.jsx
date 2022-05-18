import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/configuration/firebase-config";
import IsUserPersented from "../firebase/functions/IsUserPresented";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  useEffect(() => {
    IsUserPersented().then((bool) => {
      setIsProfileCompleted(bool);
      console.log(bool);
    });
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) return <h1>Loading..</h1>;
  return (
    <userContext.Provider
      value={{ user, setUser, isProfileCompleted, setIsProfileCompleted }}
    >
      {children}
    </userContext.Provider>
  );
};

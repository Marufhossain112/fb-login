import { FacebookAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { MyContext } from "../../context/AuthContext";
const Home = () => {
  const { user, signInWithFb } = useContext(MyContext);
  const fbProvider = new FacebookAuthProvider();
  const handleFb = () => {
    signInWithFb(fbProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={handleFb}>Sign in with Facebook</button>
    </div>
  );
};

export default Home;

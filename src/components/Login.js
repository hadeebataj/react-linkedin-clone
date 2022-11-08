import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if (!name) {
      return alert("Please return a full name!");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
    );
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt=""
      />
      <form>
        <input
          placeholder="Full name (required if registering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile picture URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;

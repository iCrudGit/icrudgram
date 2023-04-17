import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { app, fireDb } from "../firebaseConfig";
import { showLoaderAction, hideLoaderAction } from "../actions/actionLoader";

const Login = () => {

  const loader = useSelector((state) => state.loaderR);
  const { loading } = loader;

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(showLoaderAction());
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getDoc(doc(fireDb, "iusers", user.uid)).then((user) => {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...user.data(), id: user.id })
          );
          toast.success("Login Successfull");
        });
        dispatch(hideLoaderAction());
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        dispatch(hideLoaderAction());
        toast.error("Login credentials error");
      });
  };

  return (
    <div className="h-screen flex justify-between flex-col overflow-x-hidden">
      {loading && <Loader />}
      <div className="flex justify-start">
        <div className="h-40 bg-primary w-96 transform -skew-x-[25deg] -ml-10 flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold skew-x-[25deg] text-white">
            CRUD
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[426px] flex flex-col space-y-5 card p-5">
          <h1 className="text-4xl text-primary font-semibold">
            AUTHENTICATION
          </h1>
          <hr />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 h-10 rounded-sm focus:red pl-5"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 h-10 rounded-sm focus:border-gray-300 pl-5"
          />

          <div className="flex justify-end">
            <button
              className="bg-primary h-10 rounded-sm text-white px-10"
              onClick={login}
            >
              LOGIN
            </button>
          </div>
          <hr />
          <Link to="/register" className="text-[15px] text-primary">
            NOT YET REGISTERED? CLICK HERE TO REGISTER
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="h-40 bg-primary w-96 transform skew-x-[25deg] -mr-10 flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold -skew-x-[25deg] text-white">
            INNOVATOR
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

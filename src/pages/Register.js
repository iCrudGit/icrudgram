import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, fireDb } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { hideLoaderAction, showLoaderAction } from "../actions/actionLoader";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Register = () => {

  const loader = useSelector(state=>state.loaderR)
  const {loading} = loader

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const register = () => {
    //try {
    const auth = getAuth(app);
    dispatch(showLoaderAction())
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;

        const userData = {
          email: user.email,
          profilePicUrl: "",
          bio: "Hi, I/am Zoilo T. Mahumoc Jr ",
        };

        setDoc(doc(fireDb, "iusers", user.uid), userData);
        
        dispatch(hideLoaderAction())
        toast.success('Registration Successfull')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
        dispatch(hideLoaderAction())
        toast.error('Something went wrong')
      });
    //} catch (error) {}
  };

  return (
    <div className="h-screen flex justify-between flex-col overflow-x-hidden bg-primary">
        {loading && <Loader />}
      <div className="flex justify-start">
        <div className="h-40 bg-white w-96 transform -skew-x-[25deg] -ml-10 flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold skew-x-[25deg] text-primary">
            CRUD
          </h1>
        </div>
      </div>

      <div className="flex justify-center bg-primary">
        <div className="w-[426px] flex flex-col space-y-5 card p-5">
          <h1 className="text-4xl text-white font-semibold">REGISTRATION</h1>
          <hr />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 h-10 rounded-sm focus:red pl-5 bg-transparent text-gray-400"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 h-10 rounded-sm focus:border-gray-300 pl-5 bg-transparent text-gray-400"
          />
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="border border-gray-300 h-10 rounded-sm focus:border-gray-300 pl-5 bg-transparent text-gray-400"
          />

          <div className="flex justify-end">
            <button
              className="bg-white h-10 rounded-sm text-primary px-10"
              onClick={register}
            >
              REGISTER
            </button>
          </div>
          <hr />
          <Link to="/login" className="text-[14px] text-white">
            NOT YET REGISTERED? CLICK HERE TO REGISTER
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="h-40 bg-white w-96 transform skew-x-[25deg] -mr-10 flex items-center justify-center">
          <h1 className="text-center text-4xl font-semibold -skew-x-[25deg] text-primary">
            INNOVATOR
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;

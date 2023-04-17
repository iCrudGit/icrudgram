import React from "react";
import Header from "./Header";

function DefaultLayout (props){
  return (
    <div className="mx-10 my-5 md:mx-5">
      <Header />
      <div className="content mt-5 border h-[85vh] rounded-md p-5">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;

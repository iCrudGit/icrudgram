import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";

function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Add Post",
      path: "/addpost",
    },
    {
      title: "Shares",
      path: "/shares",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="p-5 bg-primary rounded-md">
      {!showMenu && (
        <div className="md:flex justify-end hidden bg-primary -mb-8">
          <CgMenuRightAlt
            size={30}
            color="white"
            className="cursor pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
      )}

     <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">CRUD</h1>

        <div className="flex space-x-10 justify-end items-center md:hidden">
        {menuItems.map((item) => (
          <Link
            to={`${item.path}`}
            className={`text-gray-300 ${
              item.path === location.pathname &&
              "bg-green-600 rounded py-1 px-2 border-b-[2px]"
            }`}
            onClick={()=>setShowMenu(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
     
      {showMenu && (
        <div className="md:flex space-x-10 justify-end flex-col items-end space-y-5 hidden">
          {menuItems.map((item) => (
            <Link
              to={`${item.path}`}
              className={`text-gray-300 ${
                item.path === location.pathname &&
                "bg-green-600 rounded py-1 px-3 border-b-[2px]"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
      
      </div>
    </div>
  );
}

export default Header;

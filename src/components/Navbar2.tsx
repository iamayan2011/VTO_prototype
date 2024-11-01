import React from "react";
import { Link } from "react-router-dom";

// const Navbar2 = () => {
//   return (
//     <div className="flex space-x-2">
//       <Link to="/">Home</Link>
//       <Link to="/demo">Demo</Link>
//       <Link to="/demo2">Demo2</Link>
//     </div>
//   );
// };

const Navbar2: React.FC = () => {

    
  return (
    
    <div className={`navbar navbar2`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="#">Parent</Link>
              <ul className="p-2">
                <li>
                  <Link to="#">Submenu 1</Link>
                </li>
                <li>
                  <Link to="#">Submenu 2</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/demo">VTO-1</Link>
            </li>
            <li>
              <Link to="/demo2">VTO-2</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl logo mx-2">
          Lumu
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex px-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <Link to="#">Submenu 1</Link>
                </li>
                <li>
                  <Link to="#">Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to="/demo">VTO-1</Link>
          </li>
          <li>
            <Link to="/demo2">VTO-2</Link>
          </li>
          <li>
              <Link to="#">About Us</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link to="#" className="btn mx-2">
          Button
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar2;

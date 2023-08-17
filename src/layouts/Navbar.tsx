import { Link } from "react-router-dom";
import logo from "../assets/images/booktopia.png";
import user from "../assets/images/user.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" normal-case text-xl">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <Link to={"/"}>
          <a className="btn btn-ghost">Home</a>
        </Link>
        <Link to={"/books"}>
          <a className="btn btn-ghost">All Books</a>
        </Link>
        <Link to={"/login"}>
          <a className="btn btn-ghost">Login</a>
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

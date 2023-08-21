import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/booktopia.png";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/features/users/userSlice";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hook";

import WDrawer from "../components/Modals/WDrawer";
import RDrawer from "../components/Modals/RDrawer";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem("user");
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  const handleLogout = () => {
    dispatch(clearUser());
    toast.success("Logout");
    navigate("/login");
  };
  const wishlist = useAppSelector((state) => state.wishlist.books);
  const readingList = useAppSelector((state) => state.readingList.books);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" normal-case text-xl">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </a>
      </div>
      <div className="flex-none gap-2">
        <Link to={"/"}>
          <a className="btn btn-ghost">Home</a>
        </Link>
        <Link to={"/books"}>
          <a className="btn btn-ghost">All Books</a>
        </Link>
        <Link to={"/books"}></Link>
        {!user?.email && (
          <Link to={"/login"}>
            <a className="btn btn-ghost">Login</a>
          </Link>
        )}
        {user?.email && (
          <Link to={"/add-books"}>
            <a className="btn btn-ghost">Add Books</a>
          </Link>
        )}
        {user?.email && (
          <>
            {/* Wishlist Drawer */}
            <WDrawer wishlist={wishlist} />
            {/* End of Wishlist Drawer */}
          </>
        )}
        {user?.email && (
          <>
            {/* Readig Drawer */}
            <RDrawer readingList={readingList} />
            {/* End of Wishlist Drawer */}
          </>
        )}
        {user?.email && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.img} />
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
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
        <></>
      </div>
    </div>
  );
};

export default Navbar;

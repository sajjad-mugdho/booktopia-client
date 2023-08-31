/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiHeart } from "react-icons/hi2";
import BookList from "../BookList";

const WDrawer = ({ wishlist }: any) => {
  return (
    <>
      <div className="drawer drawer-end z-[13]">
        <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Other navbar content */}
          <label
            htmlFor="wishlist-drawer"
            className="drawer-button btn btn-ghost"
          >
            <HiHeart className="" /> wishlist
          </label>
        </div>
        <div className="drawer-side h-full">
          <label htmlFor="wishlist-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[450px] h-full bg-base-200 text-base-content">
            {wishlist.map((item: any) => (
              <BookList item={item}></BookList>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WDrawer;

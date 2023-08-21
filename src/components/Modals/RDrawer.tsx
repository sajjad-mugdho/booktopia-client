import BookListForR from "../BookListForR";

const RDrawer = ({ readingList }) => {
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
            Reading List
          </label>
        </div>
        <div className="drawer-side h-full">
          <label htmlFor="wishlist-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[450px] h-full bg-base-200 text-base-content">
            {readingList.map((item) => (
              <BookListForR item={item}></BookListForR>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RDrawer;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch } from "../redux/hook";
import { removeFromReadingList } from "../redux/features/books/readingSlice";

const BookListForR = ({ item }: any) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromReadingList(item));
  };
  return (
    <>
      <div className="flex flex-row p-2 items-center   my-3 bg-sky-300 rounded-lg shadow-lg ">
        <div className=" p-2 ">
          <div className="avatar">
            <div className="w-24 ring ring-white rounded-full">
              <img src={item?.image} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start p-2 ">
          <h1 className="text-base font-semibold">Name: {item?.title}</h1>
        </div>
        <div>
          <button
            onClick={handleRemoveFromWishlist}
            className="btn btn-success"
          >
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default BookListForR;

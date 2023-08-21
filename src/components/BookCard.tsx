import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineBook } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/features/books/bookSlice";
import {
  addToReadingList,
  removeFromReadingList,
} from "../redux/features/books/readingSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookCard = ({ book }: any) => {
  const { id, title, image, genre, author } = book;

  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.books);

  const isBookInWishlist = wishlist.some(
    (wishlistBook) => wishlistBook?._id === book?._id
  );

  const readingList = useAppSelector((state) => state.readingList.books);
  const isBookInReadingList = readingList.some(
    (readingListBook) => readingListBook?._id === book?._id
  );

  const handleToggleWishlist = () => {
    if (isBookInWishlist) {
      dispatch(removeFromWishlist(book));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  const handleToggleReadingList = () => {
    if (isBookInReadingList) {
      dispatch(removeFromReadingList(book)); // Dispatch removeFromReadingList action
    } else {
      dispatch(addToReadingList(book)); // Dispatch addToReadingList action
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[300px] h-[300px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {title}</h2>
        <p className="text-left text-lg font-semibold">Genre: {genre}</p>
        <p className="text-left text-lg font-semibold">Author: {author}</p>
        <div className="card-actions ">
          <div className="my-2">
            <Link to={``}>
              <button
                onClick={handleToggleWishlist}
                className="btn w-[300px]  bg-pink-600"
              >
                <AiFillHeart />
                Add Wishlist
              </button>
            </Link>
            <Link to={``}>
              <button
                onClick={handleToggleReadingList}
                className="btn w-[300px] my-2  btn-primary bg-sky-500"
              >
                <AiOutlineBook />
                Add to Readlist
              </button>
            </Link>
          </div>
          <Link to={`/book-details/${id}`}>
            <button className="btn w-[300px] btn-primary">Get Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

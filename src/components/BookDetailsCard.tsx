import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  useBookDeleteMutation,
  usePostReviewMutation,
} from "../redux/features/books/bookApi";
import Review from "./Review";
import { toast } from "react-hot-toast";
import UpdateBook from "./Modals/UpdateBook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookDetailsCard = ({ book }: any) => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();
  const [postReview, { isError }] = usePostReviewMutation();
  const [bookDelete] = useBookDeleteMutation();

  const storedUserData = localStorage.getItem("user");

  const user = storedUserData ? JSON.parse(storedUserData) : null;
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleReview = async (e) => {
    e.preventDefault();

    const name = user?.name;
    const image = user?.img;
    const text = inputValue;
    const options = {
      id: id,
      data: { id: id, name: name, image: image, text: text },
    };
    const response = await postReview(options);
    setInputValue("");
    console.log(options, response);
  };

  const handleDeleteBook = async () => {
    if (book.userId === user.id) {
      const response = await bookDelete(book?.id);
      toast.success("Book deleted successfully");
      console.log(response);
      navigate("/books");
    } else {
      toast.error("You have no right to delete this book");
    }
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[500px]" src={book?.image} alt="Album" />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title">Name: {book?.title}</h2>
          <p></p>
          <p className="text-xl text-left font-bold">
            Author: {book?.author}, genre:
          </p>
          <p className="text-xl text-left font-bold">Genre: {book?.genre}, </p>
          <p className="text-xl text-left ">Details: {book?.details}</p>
          <div className="card-actions">
            <button
              onClick={() => window.update.showModal()}
              className="btn btn-success"
            >
              Edit
            </button>
            <button
              className="btn btn-warning"
              onClick={() => window.delete.showModal()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly shadow-lg rounded-md my-10">
        <div>
          <p className="text-xl font-bold">Reviwes</p>
          {book?.review &&
            book?.review.map((rev) => <Review rev={rev}></Review>)}
        </div>
        <div className=" my-5">
          <form className="flex flex-col gap-5 mx-10" onSubmit={handleReview}>
            <textarea
              onChange={handleChange}
              name="review"
              className="textarea w-[400px] textarea-accent"
              placeholder="Reviews"
            ></textarea>
            <input
              type="submit"
              value={"Post"}
              className="btn btn-secondary  w-[100px]"
            />
          </form>
        </div>
      </div>
      {/* Delete Modal */}
      <>
        <dialog id="delete" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4 text-lg font-semibold">
              Are you sure want to delete the book
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleDeleteBook} className="btn btn-error ">
                Delete
              </button>
            </div>
          </form>
        </dialog>
      </>
      <>
        <dialog id="update" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Update!</h3>
            <UpdateBook handleDeleteBook={handleDeleteBook}></UpdateBook>
          </form>
        </dialog>
      </>
    </div>
  );
};

export default BookDetailsCard;

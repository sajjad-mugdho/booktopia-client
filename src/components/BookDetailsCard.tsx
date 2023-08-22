/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import {
  useBookDeleteMutation,
  useBookUpdateMutation,
  usePostReviewMutation,
} from "../redux/features/books/bookApi";
import Review from "./Review";
import { toast } from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookDetailsCard = ({ book }: any) => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  const [postReview] = usePostReviewMutation();

  const [bookDelete] = useBookDeleteMutation();
  const [updateBook] = useBookUpdateMutation();

  const storedUserData = localStorage.getItem("user");

  const user = storedUserData ? JSON.parse(storedUserData) : null;

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleReview = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const name = user?.name;
    const image = user?.img;
    const text = inputValue;
    const options = {
      id: id,
      data: { id: id, name: name, image: image, text: text },
    };
    const response = await postReview(options);
    if (response) {
      return setInputValue("");
    }
  };

  const handleDeleteBook = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (book.userId === user.id) {
      const response = await bookDelete(book?.id);
      toast.success("Book deleted successfully");
      console.log(response);
      navigate("/books");
    } else {
      toast.error("You have no right to delete this book");
    }
  };

  const handleUpdateBook = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const title = form.booktitle.value;
    const genre = form.bookgenre.value;
    const image = form.bookimage.value;
    const author = form.bookauthor.value;
    const publicationDate = form.bookdate.value;
    const details = form.bookdetails.value;
    const options = {
      id: id,
      data: {
        title: title,
        genre: genre,
        image: image,
        author: author,
        publicationDate: publicationDate,
        details: details,
      },
    };

    if (book.userId === user.id) {
      const response = await updateBook(options);
      toast.success(" Your book Updated");
      console.log(response);
    } else {
      toast.error("You have no right to update book details");
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
              onClick={() => (window as any).update.showModal()}
              className="btn btn-success"
            >
              Edit
            </button>
            <button
              className="btn btn-warning"
              onClick={() => (window as any).delete.showModal()}
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
            book?.review.map((rev: any) => <Review rev={rev}></Review>)}
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

      {/* Book Edit Modal*/}

      <>
        <dialog id="update" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Update!</h3>
            <div>
              <div className="card flex-shrink-0  w-[30rem] my-10 shadow-2xl ">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Title</span>
                    </label>
                    <input
                      type="text"
                      name="booktitle"
                      placeholder="Book Title"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Genre</span>
                    </label>
                    <input
                      type="text"
                      name="bookgenre"
                      placeholder="Book Genre"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Image</span>
                    </label>
                    <input
                      type="text"
                      name="bookimage"
                      placeholder="Book Image"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Author</span>
                    </label>
                    <input
                      type="text"
                      name="bookauthor"
                      placeholder="Book Author"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Publish Date</span>
                    </label>
                    <input
                      type="text"
                      name="bookdate"
                      placeholder="Book Publish Date"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Book Details</span>
                    </label>
                    <input
                      type="text"
                      name="bookdetails"
                      placeholder="Book Details"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-6 modal-action">
                    <input
                      onClick={handleUpdateBook}
                      type="submit"
                      className="btn btn-primary"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </form>
        </dialog>
      </>
    </div>
  );
};

export default BookDetailsCard;

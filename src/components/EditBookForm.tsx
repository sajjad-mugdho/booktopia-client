/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useBookUpdateMutation } from "../redux/features/books/bookApi";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditBookForm = () => {
  const { id } = useParams();
  const storedUserData = localStorage.getItem("user");
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  const [updateBook] = useBookUpdateMutation();

  const handleUpdateBook = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();

    const form = e.target;
    const title = form.booktitle.value;
    const genre = form.bookgenre.value;
    const image = form.bookimage.value;
    const author = form.bookauthor.value;
    const publicationDate = form.bookdate.value;
    const details = form.bookdetails.value;
    console.log(title, genre, image, author, publicationDate, details);
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
    console.log(options);

    if (user._id) {
      const response = await updateBook(options);
      toast.success(" Your book Updated");
      console.log(response);
      form.reset;
    } else {
      toast.error("You have no right to update book details");
    }
  };
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl font-bold">Update Book</h1>
      <div className="card flex-shrink-0 m-10 justify-center  w-[32rem] my-10 shadow-2xl ">
        <form onSubmit={handleUpdateBook} className="card-body">
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

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Update Book"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;

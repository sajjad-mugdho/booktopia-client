import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePostReviewMutation } from "../redux/features/books/bookApi";
import Review from "./Review";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookDetailsCard = ({ book }: any) => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string>("");

  const [postReview, { isError }] = usePostReviewMutation();

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
    console.log(options, response);
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
            <button className="btn btn-success">Edit</button>
            <button className="btn  btn-warning">Delete</button>
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
    </div>
  );
};

export default BookDetailsCard;

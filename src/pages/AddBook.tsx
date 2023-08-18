import React from "react";
import AddBookForm from "../components/AddBookForm";

const AddBook = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <div>
        <h1 className=" text-3xl font-bold my-5">Add A New Book</h1>
      </div>
      <AddBookForm></AddBookForm>
    </div>
  );
};

export default AddBook;

import React from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import BookCard from "./BookCard";

const BookSection = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  console.log(data, isLoading, isError);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="col-span-9 grid grid-cols-3 m-5 gap-10 pb-20">
          {data?.data?.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSection;

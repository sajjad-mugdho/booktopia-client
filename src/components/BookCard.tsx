import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookCard = ({ book }: any) => {
  const { title, image, genre, author } = book;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[300px] h-[300px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {title}</h2>
        <p className="text-left text-lg font-semibold">Genre: {genre}</p>
        <p className="text-left text-lg font-semibold">Author: {author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Get Details</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

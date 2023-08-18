/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetLastBooksQuery } from "../redux/features/books/bookApi";
import BookCard from "./BookCard";

const BookSection = () => {
  const { data, isLoading, isError } = useGetLastBooksQuery(undefined);
  console.log(data, isLoading, isError);

  return (
    <>
      <div className="my-10">
        <h1 className="text-4xl font-bold">Book Section</h1>
      </div>
      <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="col-span-9 grid grid-cols-3 m-5 gap-10 pb-20">
            {data?.data?.map((book: any) => (
              <BookCard book={book} />
            ))}
          </div>
        </div>
      </div>
      <div className="join my-5">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </>
  );
};

export default BookSection;

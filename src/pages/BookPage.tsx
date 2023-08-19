import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/bookApi";

const BookPage = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div>
      <div className=" flex flex-col gap-5 my-10 items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-md"
        />
        <input
          className="btn btn-info max-w-xs"
          type="submit"
          value="Search"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-row">
        <div className="card w-96 max-h-screen mx-10 bg-sky-500 shadow-xl">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">Filters!</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-2 m-5 gap-10 pb-20">
          {data?.data?.map((book: any) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
      <div className="join my-5">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
    </div>
  );
};

export default BookPage;

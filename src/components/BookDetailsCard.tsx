// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookDetailsCard = ({ book }: any) => {
  //   const { title, image, genre, author } = book;
  console.log(book);

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
      <div className="flex flex-row">
        <div>Reviews</div>
        <div className="flex flex-col gap-5 ">
          <textarea
            className="textarea w-[400px] textarea-accent"
            placeholder="Reviews"
          ></textarea>
          <button className="btn btn-secondary  w-[100px]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;

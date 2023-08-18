import { useAppSelector } from "../redux/hook";

const AddBookForm = () => {
  const user = useAppSelector((state) => state.user.user);
  console.log(user);
  const handleAddBook = () => {
    console.log("test");
  };
  return (
    <div className="card flex-shrink-0  max-w-sm shadow-2xl ">
      <form onSubmit={handleAddBook} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Title</span>
          </label>
          <input
            type="text"
            name="book-title"
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
            name="book-genre"
            placeholder="Book Genre"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Author</span>
          </label>
          <input
            type="text"
            name="book-author"
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
            name="book-date"
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
            name="book-details"
            placeholder="Book Details"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Id</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;

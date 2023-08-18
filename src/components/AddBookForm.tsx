const AddBookForm = () => {
  const storedUserData = localStorage.getItem("user");
  const user = storedUserData ? JSON.parse(storedUserData) : null;
  const handleAddBook = () => {
    console.log("test");
  };
  return (
    <div className="card flex-shrink-0  w-[32rem] my-10 shadow-2xl ">
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
            <span className="label-text">Book Image</span>
          </label>
          <input
            type="text"
            name="book-image"
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
            type="text"
            placeholder="ID"
            name="userId"
            className="input input-bordered"
            value={user?._id}
            disabled
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Add Book" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;

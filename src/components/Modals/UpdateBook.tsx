/* eslint-disable @typescript-eslint/no-explicit-any */
const UpdateBook = ({ handleUpdateBook }: any) => {
  return (
    <div>
      <div className="card flex-shrink-0  w-[30rem] my-10 shadow-2xl ">
        <form className="card-body">
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

          <div className="form-control mt-6 modal-action">
            <input
              onClick={handleUpdateBook}
              type="submit"
              className="btn btn-primary"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;

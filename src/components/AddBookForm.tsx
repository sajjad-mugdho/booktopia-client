import { useDispatch } from "react-redux";
import { usePostBookMutation } from "../redux/features/books/bookApi";
import { toast } from "react-hot-toast";
const AddBookForm = () => {
  const storedUserData = localStorage.getItem("user");
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  const [postBook, { isError, isLoading, isSuccess }] = usePostBookMutation();
  const dispatch = useDispatch();

  const handleAddBook = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const title = form.booktitle.value;
    const genre = form.bookgenre.value;
    const image = form.bookimage.value;
    const author = form.bookauthor.value;
    const publicationDate = form.bookdate.value;
    const details = form.bookdetails.value;
    const userId = form.userId.value;
    const options = {
      data: {
        title: title,
        genre: genre,
        image: image,
        author: author,
        publicationDate: publicationDate,
        details: details,
        userId: userId,
      },
    };
    const response = await postBook(options);
    toast.success("book addeds");
    console.log("response::", response);
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

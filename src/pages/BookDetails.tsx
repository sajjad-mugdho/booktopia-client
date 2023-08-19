import { useParams } from "react-router-dom";
import BookDetailsCard from "../components/BookDetailsCard";
import { useGetSingleBookQuery } from "../redux/features/books/bookApi";

const BookDetails = () => {
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  return (
    <div>
      <div className=" m-5 gap-10 pb-20">
        <BookDetailsCard book={book} />
      </div>
    </div>
  );
};

export default BookDetails;

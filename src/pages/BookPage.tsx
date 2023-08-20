import BookCard from "../components/BookCard";
import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import CheckBox from "../components/CheckBox";
import CheckBoxGenre from "../components/Modals/CheckBoxGenre";

const BookPage = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useGetBooksQuery({
    genre: selectedGenres.join(","),
    year: selectedYears.join(","),
    search: searchQuery,
  });

  const handleYearCheckboxChange = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const handleGenreCheckboxChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  console.log(data);

  return (
    <div>
      <div className=" flex flex-col gap-5 my-10 items-center">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
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
        <div className="card static w-[400px] h-[1200px] flex flex-row mx-10 bg-green-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Filter By genre</h2>
            <div className="form-control">
              <CheckBoxGenre
                onGenreCheckboxChange={handleGenreCheckboxChange}
              />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Filter By Year</h2>
            <div className="form-control">
              <CheckBox
                onYearCheckboxChange={handleYearCheckboxChange}
              ></CheckBox>
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

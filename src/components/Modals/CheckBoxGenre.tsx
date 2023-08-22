/* eslint-disable @typescript-eslint/no-explicit-any */

const CheckBoxGenre = ({ onGenreCheckboxChange }: any) => {
  const genres = [
    "Science Fiction",
    "Biography",
    "Fiction",
    "Mystery",
    "Historical Fiction",
    "Fantasy",
    "Romance",
    "Science Fiction",
    "Jason Rekulak",
    "Nonfiction",
  ];

  return (
    <>
      {genres.map((genre) => (
        <label key={genre} className="cursor-pointer label">
          <span className="label-text text-left text-lg">{genre}</span>
          <input
            onChange={() => onGenreCheckboxChange(genre)}
            type="checkbox"
            className="checkbox checkbox-info"
          />
        </label>
      ))}
    </>
  );
};

export default CheckBoxGenre;

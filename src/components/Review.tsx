/* eslint-disable @typescript-eslint/no-explicit-any */
const Review = ({ rev }: any) => {
  return (
    <div className="flex flex-row p-2 my-3 bg-sky-300 rounded-lg shadow-lg ">
      <div className=" p-2 ">
        <div className="avatar">
          <div className="w-12 ring ring-white rounded-full">
            <img src={rev?.image} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-2 ">
        <h1 className="text-base font-semibold">Name: {rev?.name}</h1>
        <h1 className="text-base font-medium ">
          Review: <span className="font-thin">{rev?.text}</span>
        </h1>
      </div>
    </div>
  );
};

export default Review;

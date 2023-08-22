/* eslint-disable @typescript-eslint/no-explicit-any */

const CheckBox = ({ onYearCheckboxChange }: any) => {
  const years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];
  return (
    <>
      {years.map((year) => (
        <label key={year} className="cursor-pointer label">
          <span className="label-text text-center text-lg">{year}</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            onChange={() => onYearCheckboxChange(year)}
          />
        </label>
      ))}
    </>
  );
};

export default CheckBox;

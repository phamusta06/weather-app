/* eslint-disable react/prop-types */

const CardWeather = ({ day, imgW, dog, day2 }) => {
  return (
    <div className="flex flex-col text-white/70 justify-between items-center py-2 hover:shadow-sky-300 hover:shadow-md bg-transparent/30 w-36 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer">
      <p className="">{day2}</p>
      <p className="">{day}</p>
      <img src={imgW} alt="" className="w-28" />
      <p>{dog}</p>
    </div>
  );
};

export default CardWeather;

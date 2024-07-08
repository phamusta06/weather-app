import { useRef } from "react";
import sniper from "../../assets/targets.png";
import useDay from "../../hooks/useDay";
import useCityImage from "../../hooks/useCityImg";
import useCityName from "../../hooks/useCityName";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Sidebar = () => {
  const SearchValue = useRef();

  const {
    setTargetName,
    temp,
    date,
    timeHours,
    timeMinute,
    imgIcon,
    location,
    typeTemp,
  } = useDay();
  const { imageUrl } = useCityImage(location.name);

  return (
    <>
      <div className="flex  bg-white/50 shadow-2xl w-[50%] sm:w-[30%] flex-col rounded-l-3xl items-start py-6  gap-2 box-border  ">
        <form
          className="w-full pb-3 px-4 "
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          ></label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-black  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full outline-none p-4  ps-10 text-xs text-gray-900  placeholder-black/20  bg-transparent"
              placeholder="Search for places ..."
              ref={SearchValue}
            />
            <button
              type="submit"
              className=" absolute end-0 bottom-2 bg-slate-100  rounded-full"
              onClick={() => {
                setTargetName(SearchValue.current.value);
              }}
            >
              <img src={sniper} alt="" className="w-8 p-2   " />
            </button>
          </div>
        </form>

        <div className="h-full py-14 space-y-12 w-full">
          <div className="flex flex-col justify-center items-center">
            <img src={imgIcon} alt="" className="w-24   " />
            <div>
              <h1 className=" py-1 text-center text-3xl">
                {temp}
                <span className=" text-[28px] top-0">
                  {typeTemp ? "°C" : "°F"}
                </span>
              </h1>
              <div className="flex gap-2">
                <p className="text-lg space-x-4"> {days[date]}, </p>
                <span className="text-lg text-slate-500">
                  {" "}
                  {timeHours}:{timeMinute}
                </span>
              </div>
            </div>
          </div>

          <div className="relative   w-full  px-2   ">
            <img
              className="rounded-xl w-full h-32 object-cover    "
              src={imageUrl}
              alt="image city"
            />
            <p className="absolute top-1/2 -translate-y-1/2 font-bold text-white  text-center w-full  text-2xl">
              <span>{`${location.name} , ${location.country}`}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

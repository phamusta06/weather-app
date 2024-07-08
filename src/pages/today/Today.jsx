import Sunset from "../../assets/sunset.png";
import Sunrise from "../../assets/sunrise.png";
import useWeek from "../../hooks/useWeek";
import uvIndex from "../../assets/uvIndex.gif";
import wind from "../../assets/wind.gif";
import humidity from "../../assets/humidity.png";
import visibility from "../../assets/visibility.png";

const Today = () => {
  const { daysOfWeek, current, air } = useWeek();
  return (
    <div className="p-8   h-full w-full ">
      <div className="flex items-center h-full mx-auto">
        <ul className="flex flex-wrap text-center gap-10 text-white/80 ">
          <li className="relative flex flex-col pl-5 py-3 bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64  h-44 rounded-xl justify-between text-start overflow-hidden ">
            <p className="font-bold text-cemedium text-slate-200/90 w-full text-center ">
              UV Index
            </p>
            <div className="absolute w-32 top-[85px] left-1/2 -translate-x-1/3 -translate-y-1/2 ">
              <img
                src={uvIndex}
                alt=""
                className="w-24 opacity-90 object-cover"
              />
            </div>
            <p className=" w-full text-center text-3xl pr-3">
              {daysOfWeek.length ? daysOfWeek[0].day.uv : "??"}
            </p>
          </li>
          <li className="relative flex flex-col pl-5 py-2  bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64 justify-between  h-44 rounded-xl ">
            <p className="font-semibold	 text-slate-200/90 ">Wind Status</p>

            <div className="absolute w-32 top-[85px] left-1/2 -translate-x-1/3 -translate-y-1/2">
              <img
                className="w-24 object-cover rounded-full"
                src={wind}
                alt=""
              />{" "}
            </div>
            <p className="text-2xl">
              {current.wind_kph} <span className="text-sm">km/h</span>
            </p>
          </li>
          <li className=" flex flex-col pl-5 py-2 bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64  h-44 rounded-xl justify-between ">
            <p className="font-semibold	 text-slate-200/90 ">Sunrise & Sunset</p>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <img src={Sunrise} alt="" className="w-16 " />{" "}
                <div>
                  <p>{daysOfWeek.length && daysOfWeek[0].astro.sunrise}</p>
                  <p></p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={Sunset} alt="" className="w-16" />{" "}
                <div>
                  <p>{daysOfWeek.length && daysOfWeek[0].astro.sunset}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </li>
          <li className=" relative flex flex-col pl-5 py-2 bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64  h-44 rounded-xl justify-between">
            <p className="font-semibold	 text-slate-200/90 ">Humidity</p>
            <div className="absolute w-32 top-[85px] left-1/2 -translate-x-1/3 -translate-y-1/2 ">
              <img
                src={humidity}
                alt=""
                className="w-20 opacity-90 object-cover"
              />
            </div>

            <p className="relative  text-4xl ">
              {current.humidity}
              {"% "}
            </p>
          </li>
          <li className=" relative flex flex-col pl-5 py-2 bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64  h-44 rounded-xl justify-between ">
            <p className="font-semibold	 text-slate-200/90 ">Visibility</p>
            <div className="absolute w-32 top-[85px] left-1/2 -translate-x-1/3 -translate-y-1/2 ">
              <img
                src={visibility}
                alt=""
                className="w-20 opacity-90 object-cover"
              />
            </div>

            <p className="text-4xl">
              {daysOfWeek.length && daysOfWeek[0].hour[0].vis_km}{" "}
              <span className="text-xl">km</span>{" "}
            </p>
          </li>
          <li className="relative flex flex-col pl-5 py-2 bg-transparent/30 cursor-pointer hover:rotate-3 shadow-2xl hover:scale-110 transition-all duration w-64  h-44 rounded-xl  justify-between">
            <p className="font-semibold	 text-slate-200/90 ">Air Quality</p>

            <div className="absolute w-32 top-[85px] left-1/2 -translate-x-1/3 -translate-y-1/2">
              <img
                className="w-24 object-cover rounded-full"
                src={wind}
                alt=""
              />{" "}
            </div>
            <p className="text-4xl">{air}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Today;

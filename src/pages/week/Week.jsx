import CardWeather from "../../components/cardWeather/CardWeather";
import useWeek from "../../hooks/useWeek";
import { useTargetContext } from "../../context/TrgetContext";

const Week = () => {
  const daysWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

  const { typeTemp } = useTargetContext();

  const { loading, daysOfWeek } = useWeek();
  return (
    <div className={`p-8 w-full flex flex-col  justify-between h-[100%]`}>
      <div className="">
        {!loading ? (
          <ul className="grid grid-cols-4 justify-items-center gap-10">
            {daysOfWeek.map((res, index) => (
              <li key={index} className="">
                <CardWeather
                  day={daysWeek[new Date(res.date).getDay()]}
                  dog={
                    typeTemp ? res.day.avgtemp_c + "°" : res.day.avgtemp_f + "°"
                  }
                  imgW={res.day.condition.icon}
                />
              </li>
            ))}

            {daysOfWeek.length % 4 !== 0 &&
              Array.from({ length: 4 - (daysOfWeek.length % 4) }).map(
                (index) => (
                  <li key={`empty-${index}`} className="invisible">
                    <CardWeather />
                  </li>
                )
              )}
          </ul>
        ) : (
          <div className="flex justify-center items-center mt-24 h-full">
            <div className="rounded-full h-24 w-24 blur-sm bg-blue-400 animate-ping"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Week;

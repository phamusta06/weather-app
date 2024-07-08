import { useEffect, useState } from "react";
import axios from "axios";
import { useTargetContext } from "../context/TrgetContext";
 

const useDay = () => {
  const { typeTemp, setNameSearch } = useTargetContext();

  const [targetName, setTargetName] = useState("rabat");
  const [temp, setTemp] = useState(12);
  const [date, setDate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinute, setTimeMinute] = useState(0);
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [imgIcon, setImgIcon] = useState("");
  const [location, setLocation] = useState("");
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${targetName}&days=7&aqi=no&alerts=no`;

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setTemp(typeTemp ? res.data.current.temp_c : res.data.current.temp_f);
      setDate(new Date(res.data.current.last_updated).getDay());
      setTimeHours(new Date(res.data.current.last_updated).getHours());
      setTimeMinute(new Date(res.data.current.last_updated).getMinutes());
      setCondition(res.data.current.condition.text);
      setIcon(res.data.current.condition.icon);
      setImgIcon(res.data.forecast.forecastday[0].day.condition.icon);
      setLocation(res.data.location);
      setNameSearch(targetName||"Morocco");
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [targetName, typeTemp]);

  return {
    setTargetName,
    targetName,
    temp,
    date,
    loading,
    timeHours,
    timeMinute,
    condition,
    icon,
    imgIcon,
    location,
    typeTemp,
  };
};

export default useDay;

import {  useEffect, useState } from "react";
import axios from "axios";
import { useTargetContext } from "../context/TrgetContext";

const useWeek = () => {
    const { nameSearch } = useTargetContext()
    const { typeTemp, } = useTargetContext()
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [current, setCurrent] = useState([]);
    const [air, setAir] = useState("");
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${nameSearch}&days=7&aqi=yes&alerts=no`;
  
    useEffect(() => {
        const weekResult = async () => {
          try {
            setLoading(true);
            const res = await axios.get(apiUrl);
            setDaysOfWeek(res.data.forecast.forecastday);
            setCurrent(res.data.current);
            setAir(res.data.current.air_quality.co);
          } catch (error) {
             setError(error);
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
      
        weekResult();  
      }, [nameSearch, typeTemp]);
      
      return   {loading,error,daysOfWeek,current,air };
      
}

export default useWeek

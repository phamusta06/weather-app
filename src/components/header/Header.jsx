import { NavLink,useLocation} from "react-router-dom";
import { useState } from "react";
import { useTargetContext } from "../../context/TrgetContext";


const Header = () => {
  const [activeClick, setActiveClick] = useState(true);
  const {setTypeTemp} =useTargetContext()
  const location=useLocation().pathname;
   
  return (
    <>
      <nav className="flex justify-between items-end  min-h-16 px-8 w-full">
        <ul className="flex font-bold text-xl gap-10 w-full justify-center ">
          <li>
            {" "}
            <NavLink to="/Today" className={`text-slate-200 ${location==="/Today"?'bg-slate-900/20':''}  hover:bg-slate-900/30 px-4 py-2 text-lg  rounded-full transition-all duration-100`}>
              Today
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={() => {
              
            }
            } to="/Week" className={`text-slate-200 ${location==="/Week"?'bg-slate-900/20':''}  hover:bg-slate-900/30 px-4 py-2 text-lg  rounded-full transition-all duration-100`}>
              Week
            </NavLink>{" "}
          </li>
        
        </ul>
        <div className="flex gap-5 items-center">
         <div>
         <button
            onClick={()=>{setActiveClick(true);setTypeTemp(true)}}
            className={
              activeClick
                ? "bg-slate-700/70 text-white/85 rounded-full w-8 h-8 text-center text-xs font-bold "
                : "bg-slate-700/20 shadow-xl rounded-full w-8 h-8 text-center text-xs text-white font-bold "
            }
          >
            °C
          </button>
         </div>
          <div>
          <button
            onClick={()=>{setActiveClick(false); setTypeTemp(false)}}
            className={
              activeClick
                ? "bg-slate-700/20 shadow-xl rounded-full w-8 h-8 text-center text-xs text-white font-bold "
                : "bg-slate-700/70 text-white/85 rounded-full w-8 h-8 text-center text-xs font-bold "
            }
          >
            °F
          </button>
          </div>

          
        </div>
      </nav>
    </>
  );
};

export default Header;

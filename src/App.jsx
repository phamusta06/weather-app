import Container from "./components/container/Container";
import Sidebar from "./components/sidebar/Sidebar";



function App() {



  return (
   
  <div className="flex rounded-3xl  box-border bg-[rgb(255,255,255,0.2)] backdrop-blur-xl w-[1200px] h-[550px]">
    <Sidebar/>
    <Container/>
  
  </div> 
  
   
   
  )
}

export default App

import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import './App.css'



function App() {
  

  return (
    <div className="App">
      <NavBar/>      
      <Outlet/>      
    </div>
  )
}

export default App

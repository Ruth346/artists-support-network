import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Painting from "./Pages/Painting";
import Photography from "./Pages/Photography";
import MovingImage from "./Pages/MovingImage";
import Digital from "./Pages/Digital";
import Carousel from "./Components/Carousel";
import "./App.css";

function App() {
let component
switch (window.location.pathname) {
  case "/home":
    component = <Home />
    break
  case "/painting":
    component = <Painting />
    break
  case "/photography":
    component = <Photography />
    break
  case "/movingimage":
    component = <MovingImage />
    break
  case "/digital":
    component = <Digital />
    break
}

  return (
    <>
    <Navbar />
    {component}
    <Carousel />
    </>
  )
  
}

export default App;

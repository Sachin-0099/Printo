import { Home, Search, Person } from "@mui/icons-material";
import HeaderTop from "./Components/HeaderTop";
import HeaderNav from "./Components/HeaderNav";
import HeaderMain from "./Components/HeaderMain";
import HeroSection from "./Components/HeroSection";
import ImageSlider from "./Components/ImageSlider";
import ImageMap from "./Components/ImageMap";
import MainImg from "./Components/MainImg";


function App() {

  return (
    <div>
  
      <HeaderTop/>
      <HeaderNav/>
      <HeaderMain/>
      <HeroSection
        slides={[
          "Images/Hero1.webp",
      
         
         
          "Images/Sell.jpeg",

         
        ]}
      />
      <ImageSlider/>
      <ImageMap/>
      <MainImg/>
      <ImageMap/>
   
      
         
      


    </div>
   
  );
}

export default App;

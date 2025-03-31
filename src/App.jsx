import { Home, Search, Person } from "@mui/icons-material";
import HeaderTop from "./Components/HeaderTop";
import HeaderNav from "./Components/HeaderNav";
import HeaderMain from "./Components/HeaderMain";
import HeroSection from "./Components/HeroSection";
import ImageSlider from "./Components/ImageSlider";
import ImageGrid from "./Components/ImageMap";
import MainImg from "./Components/MainImg";
import GridImage from "./Components/GridImage";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer"
import About from "./Components/About";
import Body from "./Components/Body";
import InfoSection from "./Components/InfoSection";
import Journal from "./Components/Journal";
const images = [
  { src: "Images/Pens.webp", title: "Pens" },
  { src: "Images/pencils.webp", title: "Pencils" },
  { src: "Images/Notebooks.webp", title: "Notebooks" },
  { src: "Images/Planners.jpeg", title: "Planners" },
  { src: "Images/Journals.jpeg", title: "Journals" },
  { src: "Images/Todos.webp", title: "To-do Lists" },
  { src: "Images/StickyNotes.webp", title: "StickyNotes" },
  { src: "Images/Memo.webp", title: "Memo" },
  { src: "Images/Highlighters.webp", title: "Highlighters" },
  { src: "Images/Sharpners.webp", title: "Sharpners" },
];
const images1 = [
  { src: "Images/Stapler.webp", title: "Stapers" },
  { src: "Images/Scissors.webp", title: "Scissors" },
  { src: "Images/Fillings.webp", title: "Folders & Fillings" },
  { src: "Images/Organisers.jpeg", title: "Organisers" },
  { src: "Images/Magnifiers.webp", title: "Magnifiers" },
  { src: "Images/Cutters.webp", title: "Cutters" },
  { src: "Images/Paperclips.webp", title: "Paperclipss" },
  { src: "Images/Wmarkers.jpeg", title: "Whiteboard Markers" },
  { src: "Images/Glue.webp", title: "Glue" },
  { src: "Images/Punches.webp", title: "Punches" },
];
const images2 = [
  { src: "Images/Water.jpeg", title: "WaterColor" },
  { src: "Images/AcrylicPaints.jpeg", title: "AcrylicPaints" },
  { src: "Images/ColouredFinals.jpeg", title: "ColouredFinals" },
  { src: "Images/SketchPencil.jpeg", title: "SketchPencil" },
  { src: "Images/Charcoal.jpeg", title: "Charcoal.jpeg" },
  { src: "Images/BrushPens.jpeg", title: "BrushPens.jpeg" },
  { src: "Images/Fineliners.jpeg", title: "Fineliners.jpeg" },
  { src: "Images/OilPastels.jpeg", title: "Whiteboard Markers" },
  { src: "Images/Mandala.webp", title: "Mandala" },
  { src: "Images/Masking.webp", title: "Masking" },
];


function App() {

  return (
    <div>
  
      <HeaderTop/>
      <HeaderNav/>
      <HeaderMain/>
      <HeroSection
        slides={[
          "Images/Under499.jpg",
          "Images/Under199.jpg",
          "Images/Under299.jpg",
          "Images/Hero2.webp",
          'Images/Her3.webp',
      
         
         
          "Images/Sell.jpeg",

         
        ]}
      />
     
      <ImageGrid title="Elevate Your Workspace with Premium Stationery" images={images} />
      <ImageSlider/>
      <MainImg/>
      {/* <ImageMap/> */}
      <ImageGrid title="Elevate Your Workspace Efficiency - Office Essentials" images={images1} />
      <GridImage/>
      <Categories/>

     
   
     
      <ImageGrid title="Dive Into A World of Creativity With Our Artistry & Crafting Wonders" images={images2} />
      <GridImage/>
      <ImageGrid title="New Launches  Artistry & Crafting Wonders" images={images2} />
      <Body/>
      <Journal/>
      <InfoSection/>
      <About/>
      <Footer/>
      


    </div>
   
  );
}

export default App;

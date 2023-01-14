import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
// import MenuHover from "./components/MenuHover/Menuhover"
import CardArea from "./components/Cardarea/Cardarea"
import FacialCards from "./components/FacialCards/Facialcards"
import  HomeCare from "./components/HomeCareRoutine/Homecare"
import  Contacts from "./components/Contacts/Contacts"
import  Footer from "./components/Footer/Footer"
import img1 from "../src/assets/facialTreatments.jpeg";
import img2 from "../src/assets/laserTreatment.jpeg";
import img3 from "../src/assets/threading.jpeg";
import img4 from "../src/assets/waxing.jpeg";
import img5 from "../src/assets/piercing.jpeg";
import img6 from "../src/assets/lifting.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="cardareahalfbg"></div>
      
      <div className="cardareaContainer">
        <CardArea
          img={img3}
          title="Eyebrow Tinting"
          paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          link="More"
        />
        <CardArea
          img={img4}
          title="Waxing"
          paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          link="More"
        />
        <CardArea
          img={img5}
          title="Piercing"
          paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          link="More"
        />
        <CardArea
          img={img6}
          title="Eyebrow Lifting"
          paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          link="More"
        />
      </div>

      <FacialCards
        img={img1}
        title="Facial Treatment"
        paragraph="Aliquam ut porttitor leo a. Augue interdum velit euismod in. Suscipit adipiscing bibendum est ultricies. Molestie a iaculis at erat pellentesque adipiscing "
      />
      <FacialCards
        img={img2}
        title="Facial Treatment"
        paragraph="Aliquam ut porttitor leo a. Augue interdum velit euismod in. Suscipit adipiscing bibendum est ultricies. Molestie a iaculis at erat pellentesque adipiscing "
      />
      <HomeCare />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

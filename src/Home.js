import "./App.css";
import Banner from "./components/banner";
import Popup from "./components/Popup";
import { useState } from "react";
function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const banner = {
    backgroundSize: "cover",
  };

  return (
    <>
      <Banner
        backgroundImage="assets/home/Pa-system-rental.jpg"
        bannerclass="banner"
        h1="Technology Rental | Switch Business Event Stress to Ultimate Success"
        para="Technology rental gives you a unique chance to make your business event successful.We offer a wide range of event technology hire in the USA."
        bannerbtn="Get a Quote"
      />
      
      <button onClick={() => setButtonPopup(true)}>Request Quote</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <br />
      
    </>
  );
}

export default Home;

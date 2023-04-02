import "./App.css";
import Banner from "./components/banner";

function Home() {
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
    </>
  );
}

export default Home;

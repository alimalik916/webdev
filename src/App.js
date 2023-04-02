import "./App.css";
import Header from "./Header";
import Banner from "./components/banner";

function App() {
  const banner = {
    backgroundSize: "cover",
  };

  return (
    <>
      <Header />
      <Banner
        backgroundImage="assets/home/Pa-system-rental.jpg"
        bannerclass="banner"
        h1="dadad"
        para="data"
        bannerbtn="Get a Quote"
      />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Viewproduct" element={<Viewproduct />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/Viewproduct/:productId" element={<ProductDetail />} />
          <Route path="Viewproduct">
        <Route path=":productId" element={<ProductDetail />} />
        
      </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

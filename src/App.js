import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
 

  return (
    <>
      <Header />
      <Home />
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

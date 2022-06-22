import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Brands from "./components/marketLeaders/Brands";
import Newgames from "./components/newReleases/Newgames";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return <div className="App">
    <Header/>
    <Brands/>

    <Newgames/>
    <Testimonial/>
    <Footer/>
  </div>;
}

export default App;

//componente
import Featured from "./components/featured/Featured";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Noticias from "./components/Noticias/Noticias";
import Banner from "./components/Slider/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Noticias />
      <Featured />
      <Footer />
    </>
  );
}

export default App;

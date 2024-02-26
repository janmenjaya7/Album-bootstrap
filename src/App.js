import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import TextSection from "./component/TextSection";
import Footer from "./component/Footer";
import Test from "./component/test";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <Navbar />
      <TextSection />
      <Card />
      <Footer />
      <Test />
    </div>
  );
}

export default App;

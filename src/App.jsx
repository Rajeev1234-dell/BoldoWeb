import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Testonomial from "./components/Testonomial/Testonomial";
import Connect from "./components/Connect/Connect";
import Customer from "./components/Customer/Customer";
import Gallery from "./components/Gallery/Gallery";
import content from "./json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header content={content}/>
      <div className="main">
        <Services />
        <Connect content={content}/>
        <Customer content={content}/>
      </div>
      <Testonomial content={content}/>
      <div className="main">
        <Gallery />
        <Blog content={content}/>
        <Footer />
      </div>
    </>
  );
}

export default App;

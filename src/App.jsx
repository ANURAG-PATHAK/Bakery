import "./App.css";
import { Hero, Navbar, Footer, Products } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default App;

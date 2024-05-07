import "./App.css";
import { Hero, Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;

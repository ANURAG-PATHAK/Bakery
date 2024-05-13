import "./App.css";
import { Hero, Navbar, Footer, Sections } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
};

export default App;

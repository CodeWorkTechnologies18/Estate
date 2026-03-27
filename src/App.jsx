import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-secondary text-slate-800">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Buttons from "./components/buttons";
import Header from "./components/header";

function App() {
  return (
    <div className="bg-[#E5E5E5]  py-8">
      <div className="container bg-white  sm:w-4/5 h-full">
        <Header />
        <Buttons />
      </div>
    </div>
  );
}

export default App;

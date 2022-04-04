import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Homepage } from "./pages/homepage/homepage";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element = {<Homepage />} />
      <Route path="/login" element = {<Homepage />} />
      <Route path="/signUp" element = {<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

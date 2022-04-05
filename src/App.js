import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Homepage } from "./pages/homepage/homepage";
import { Route, Routes} from "react-router-dom";
import { Notes } from "./pages/note/note";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signUp/signup";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element = {<Homepage />} />
      <Route path="/notes" element = {<Notes />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/signUp" element = {<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import Images from "./images/Images";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        {/* <div>
          <Images />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

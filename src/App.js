import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/header/Navbar";
import HomePage from "./components/pages/HomePage";
import MusicDetails from "./user/MusicDetails";
import MusicPage from "./user/MusicPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/music" element={<MusicPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/music-details/:id" element={<MusicDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

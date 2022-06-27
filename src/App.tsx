import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MovieDetail from "./components/movie/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

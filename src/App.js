import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Movielist from "./pages/Movielist";
import Pagenotfound from "./pages/Pagenotfound";
import Movied from "./pages/Movied";

function App() {
  return (
    <>
      <Routes>
        <Route path="/movie/:id" element={<Movied />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:type" element={<Movielist />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

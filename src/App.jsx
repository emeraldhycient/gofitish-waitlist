import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./pages/stats";
import Waitlist from "./pages/waitlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Waitlist />} />
        <Route path="waitlist/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

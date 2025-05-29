import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import Ten from "./pages/Ten";
import Eleven from "./pages/Eleven";
import Twelve from "./pages/Twelve";
import Thirteen from "./pages/Thirteen";
import Fourteen from "./pages/Fourteen";
import Fifteen from "./pages/Fifteen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<One />} />
      <Route path="/2" element={<Two />} />
      <Route path="/3" element={<Three />} />
      <Route path="/4" element={<Four />} />
      <Route path="/5" element={<Five />} />
      <Route path="/6" element={<Six />} />
      <Route path="/7" element={<Seven />} />
      <Route path="/8" element={<Eight />} />
      <Route path="/9" element={<Nine />} />
      <Route path="/10" element={<Ten />} />
      <Route path="/11" element={<Eleven />} />
      <Route path="/12" element={<Twelve />} />
      <Route path="/13" element={<Thirteen />} />
      <Route path="/14" element={<Fourteen />} />
      <Route path="/15" element={<Fifteen />} />
    </Routes>
  );
};

export default App;
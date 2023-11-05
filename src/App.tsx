import { Routes, Route } from "react-router-dom";
import { LeftBar } from "./components/LeftBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LeftBar />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navigationbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CancellationPage1 from "./pages/CancellationPage1";
import CancellationPage2 from "./pages/CancellationPage2";
import CancellationPage3 from "./pages/CancellationPage3";
import TripCancellationSuccessPage from "./pages/CancellationSuccess";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />

        <Routes>
          <Route path="/" element={<CancellationPage1 />} />
          <Route path="/cancellation2" element={<CancellationPage2 />} />
          <Route path="/cancellation3" element={<CancellationPage3 />} />
          <Route path="/success" element={<TripCancellationSuccessPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

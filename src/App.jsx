import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import TranslatorPage from "../src/pages/TranslatorPage/TranslatorPage";
import GamePage from "./pages/Game/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TranslatorPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      {/*       <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

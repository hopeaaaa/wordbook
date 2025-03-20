import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import TranslatorPage from "../src/pages/TranslatorPage/TranslatorPage";
import GamePage from "./pages/GamePage/GamePage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/users/:userId" element={<UserProfilePage />} />
      </Routes>
      {/*       <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

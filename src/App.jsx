import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<RecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Index";
import MainLayout from "./Layouts/MainLayout";
import AddPage from "./Pages/AddPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/addpage" element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

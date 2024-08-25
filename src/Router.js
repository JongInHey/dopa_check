import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Choice } from "./pages/qna/Choice";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna" element={<Choice />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Choice } from "./pages/qna/Choice";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home colorMode={colorMode} />} />
        <Route path="/qna" element={<Choice colorMode={colorMode} />} />
        <Route path="/result" element={<Result colorMode={colorMode} />} />
        <Route path="/*" element={<PageNotFound colorMode={colorMode} />} />
      </Routes>
      <Footer colorMode={colorMode} />
    </HashRouter>
  );
}

export default App;

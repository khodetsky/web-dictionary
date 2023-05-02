import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from './GlobalStyles';
import { Navbar } from "../components/Navbar/Navbar";
import { MainPage } from "../pages/MainPage/MainPage";
import { WordCheckPage } from "../pages/WordCheckPage/WordCheckPage";
import { AddWordPage } from "../pages/AddWordPage/AddWordPage";
import { ResultsPage } from "../pages/ResultsPage/ResultsPage";

// date.toLocaleString();

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{paddingTop: 40, display: "flex", justifyContent: "center"}}>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<MainPage />} />
            <Route path="word-check" element={<WordCheckPage />} />
            <Route path="add-word" element={<AddWordPage />} />
            <Route path="word-check/results" element={<ResultsPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

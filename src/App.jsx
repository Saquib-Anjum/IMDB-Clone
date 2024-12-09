import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";

import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
                {/* <Pagination /> */}
              </>
            }
          />
          {/* Route for /movie */}
          <Route
            path="/movie"
            element={
              <>
                <Banner />
                <Movies />
                
              </>
            }
          />
          {/* Route for /favourites */}
          <Route path="/favourites" element={<Favourites />} />
          {/* Fallback redirect for unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
//export
export default App;

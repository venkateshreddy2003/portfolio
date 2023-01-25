import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Header />
      <Services />
      <Works />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Header />
                <Services />
                <Works />
                <Footer />
              </div>
            }
            route="home"
          />
          <Route
            path="/projects"
            element={
              <div>
                <Navbar />
                <Project />
              </div>
            }
            route="projects"
          />
          <Route path="*" element={<div>404 Page not Found Error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./pages/main/home";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <div className="page-container">
          <Header />
          <div className="main">
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

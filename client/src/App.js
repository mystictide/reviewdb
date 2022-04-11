import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./pages/main/home";
import Footer from "./components/footer";
import Login from "./pages/account/login";
import Register from "./pages/account/register";

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
                <Route path="/account/login" element={<Login />}></Route>
                <Route path="/account/register" element={<Register />}></Route>
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

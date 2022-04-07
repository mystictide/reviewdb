import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Dashboard from "./pages/main/dashboard";
import Login from "./pages/account/login";
import Register from "./pages/account/register";

function App() {
  return (
    <>
      <Router>
        <div className="page-container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/account/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

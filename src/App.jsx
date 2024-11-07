// src/App.jsx
import { BrowserRouter as Router,  Routes,Route } from "react-router-dom"; 
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
    return (
        
        <>
            
            <nav>
                <a href="/login">login</a>
                <a href="/">register</a>
                <a href="/forgetpassword">Forgetpassword</a>

            </nav><Router>
                <Routes>
                    <Route path="/" element={<Register />} /> {/* 👈 Renders at /app/ */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgetpassword" element={<ForgotPassword />} />
                    <Route path="/resetpassword/:token" element={<ResetPassword />} />
                </Routes>
            </Router></>
    );
};

export default App;
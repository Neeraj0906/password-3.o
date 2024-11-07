// src/App.jsx
import { BrowserRouter as Router,  Routes,Route } from "react-router-dom"; 
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
    return (
        
        <>
            
            
            
            <div>
            <Register />
            <Login />
            <ForgotPassword />
            <ResetPassword />
            </div>
            </>
    );
};

export default App;
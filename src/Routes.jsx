import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";

export const Routex = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/compra" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

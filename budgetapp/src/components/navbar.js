import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();

        } catch {
            console.error('Failed to log out');
        }
    }

    return (
        <Router> {/* Wrap the Navbar component in a Router */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Money Moves</Link>
                </div>
                <ul className="nav-list">
                    {currentUser ? (
                        <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </Router>
);
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './Signin';
import SignUpPage from './Signup';
import WeatherApp from './WeatherApp';
import HomePage from './HomePage';
import CompareWeather from './CompareWeather';
import Navbar from './NavBar'; 
import Footer from './Footer';
import { AuthProvider, useAuth } from './auth/auth';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signin" />;
}
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <WeatherApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/compare"
            element={
              <ProtectedRoute>
                <CompareWeather />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}









/**
 * Main App component
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Placeholder pages
const Dashboard = () => <div>Dashboard</div>;
const Analytics = () => <div>Analytics</div>;
const Comparison = () => <div>Comparison</div>;
const Strategy = () => <div>Strategy</div>;
const NotFound = () => <div>Page Not Found</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

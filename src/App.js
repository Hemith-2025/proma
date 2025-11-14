// Styles
import './App.css';

// Data
import Pages from "./Data/Pages";

// Components

// Dependencies
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        {Pages.map((page, index) => (
          <Route key={index} path={page.slug} element={page.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;

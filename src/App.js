// Styles
import './App.css';

// Data
import Pages from "./Data/Pages";

// Components
import ScrollIndicator from './Components/Common/ScrollIndicator';

// Dependencies
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  document.body.className = "light default";
  const location = useLocation();
  return (
    <>
    <ScrollIndicator />
      <Routes key={location.pathname} location={location}>
        {Pages.map((page, index) => (
          <Route key={index} path={page.slug} element={page.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;

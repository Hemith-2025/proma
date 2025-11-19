// Styles
import "./App.css";

// Data
import { Pages, Forms } from "./Data/Pages";

// Components
import ScrollIndicator from "./Components/Common/ScrollIndicator";

// Dependencies
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  document.body.className = "light default";
  const location = useLocation();
  return (
    <>
      {(window.location.pathname === "/" ||
        window.location.pathname === "/tutorial" ||
        window.location.pathname === "/contact") && <ScrollIndicator />}
      <Routes key={location.pathname} location={location}>
        {Pages.map((page, index) => (
          <Route key={index} path={page.slug} element={page.component} />
        ))}
        {Forms.map((form, index) => (
          <Route key={index} path={form.slug} element={form.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;

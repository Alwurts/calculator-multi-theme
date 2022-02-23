import React from 'react';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Neumorphic from "./pages/Neumorphic";
import Minimalism from "./pages/Minimalism";
import Material from './pages/Material';
import Glassmorphism from './pages/Glassmorphism';

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {
  
  //const [darkState, setDarkState] = React.useState(true); // State for the dark mode

  const [darkState, setDarkState] = useStickyState(true, "darkmode");

  
  

  return (
    <React.Fragment >
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
              index
              element={<Navigate to="neumorphism" />}  //No match route
          />
          <Route path="neumorphism" element={<Neumorphic darkState={darkState} setDarkState={setDarkState}/>} />
          <Route path="minimalism" element={<Minimalism darkState={darkState} setDarkState={setDarkState}/>} />
          <Route path="glassmorphism" element={<Glassmorphism darkState={darkState} setDarkState={setDarkState}/>} />
          <Route
              path="*"
              element={<Navigate to="neumorphism" />}  //No match route
          />
          
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App;

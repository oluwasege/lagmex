import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./components/Home/Home";
import React from "react";
import Header from "./components/navbar";

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route exact  path ="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}


export default App;




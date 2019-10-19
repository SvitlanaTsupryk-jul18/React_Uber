import React from "react";
import "./App.scss";
import RestaurantsListPage from "./components/RestaurantsListPage";

const App = () => (
  <div className="page">
    <h1>React Uber eats</h1>
    <RestaurantsListPage />
  </div>
);

export default App;

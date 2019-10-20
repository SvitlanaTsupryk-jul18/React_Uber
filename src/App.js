import React from "react";
import "./App.scss";
import RestaurantsListPage from "./components/RestaurantsListPage";
import Header from "./components/Header";

const App = () => (
  <div className="page">
    <h1>React Uber eats</h1>
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
  </div>
);

export default App;

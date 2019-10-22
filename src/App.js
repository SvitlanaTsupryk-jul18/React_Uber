import React from "react";
import "./App.scss";
import RestaurantsListPage from "./components/RestaurantsListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <h1>React Uber eats</h1>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
      </main>
    </div>
    <Footer />
  </>
);

export default App;

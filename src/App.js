import React from "react";
import "./App.scss";
import RestaurantsListPage from "./components/RestaurantsListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
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

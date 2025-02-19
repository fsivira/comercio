import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
    </>
  );
};

export default App;

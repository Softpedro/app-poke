import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import PokemonApp from "./PokemonApp.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </StrictMode>
);

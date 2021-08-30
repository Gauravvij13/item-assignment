import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import { composeComponents } from "utils/component";
import { AppProvider } from "context/AppContext";
import { ToastContainer } from "react-toastify";
import ListSection from "modules/ListSection";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const Providers = composeComponents(AppProvider);
  return (
    <Providers>
      <ToastContainer hideProgressBar autoClose={2000} limit={1} />
      <ListSection />
    </Providers>
  );
}

export default App;

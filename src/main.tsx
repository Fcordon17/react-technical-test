import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStore } from "./store/GlobalStore";
import App from "./components/App.tsx";
import "./main.css";
import PokemonDetail from "./components/PokemonDetail.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStore>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/details" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </GlobalStore>
    </QueryClientProvider>
  </React.StrictMode>
);

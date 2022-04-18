import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import SuperHeroes from "./components/SuperHeroes.page";
import Homepage from "./components/Home.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import TestTotal from "./components/TestTotal.page";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/test-total">testTotal</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/test-total" element={<TestTotal />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

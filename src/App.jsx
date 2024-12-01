import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Come from "./components/Сoming/Come";
import { getProducts } from "./redux/productsOps";

import "./App.css";
import { useDispatch } from "react-redux";

const Orders = lazy(() => import("./pages/Orders/Orders"));
const Products = lazy(() => import("./pages/Products/Products"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const Information = lazy(() => import("./components/Information/Information"));

function App() {
  const [toggle, isToggle] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleToggle = () => {
    isToggle(!toggle);
  };
  return (
    <div className="layout">
      <Header handleToggle={handleToggle} />
      <Sidebar toggle={toggle} handleToggle={handleToggle} />

      <Suspense fallback={null}>
        <main className="main">
          <Come />
          <Routes>
            <Route path="/" element={<Orders />}>
              <Route path="information" element={<Information />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;

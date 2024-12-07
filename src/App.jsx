import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { orders } from "./date";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddButton from "./components/AddButton/AddButton";

import "./App.css";

const Orders = lazy(() => import("./pages/Orders/Orders"));
const Products = lazy(() => import("./pages/Products/Products"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
// const Information = lazy(() => import("./components/Information/Information"));

function App() {
  const [toggle, isToggle] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [OrdersLength, setOrdersLength] = useState(0);

  useEffect(() => {
    setOrdersLength(orders.length);
  }, [OrdersLength]);

  const handleToggle = () => {
    isToggle(!toggle);
  };
  return (
    <div className="layout">
      <Header handleToggle={handleToggle} />
      <Sidebar toggle={toggle} handleToggle={handleToggle} />

      <Suspense fallback={null}>
        <main className="main">
          <AddButton sizeIcon={20} textTitle={`Приходи / ${OrdersLength}`} />
          <Routes>
            <Route
              path="/orders"
              element={
                <Orders
                  selectedOrder={selectedOrder}
                  setSelectedOrder={setSelectedOrder}
                />
              }
            />

            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;

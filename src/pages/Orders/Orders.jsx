import css from "./Orders.module.css";
import Order from "../../components/Order/Order";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/productsSlice";

const Orders = () => {
  const products = useSelector(selectItems);

  return (
    <div className={css}>
      <ul>
        {products.map((elem) => (
          <li key={elem.id}>
            <Order elem={elem} />
          </li>
        ))}
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Orders;

import PropTypes from "prop-types";
import css from "./OrderDetails.module.css";

const OrderDetails = ({ closeDetails, order, products }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title} data-full-text={order.title} tabIndex="0">
        {order.title}
      </h2>
      <p>Дата створення: {new Date(order.date).toLocaleString()}</p>
      <h3>Продукти:</h3>
      {products.map((product) => (
        <div key={product.id}>
          <p>Назва: {product.title}</p>
          <p>Тип: {product.type}</p>
        </div>
      ))}
      <button onClick={closeDetails}>Закрити</button>
    </div>
  );
};

OrderDetails.propTypes = {
  closeDetails: PropTypes.func,
  order: PropTypes.object,
  products: PropTypes.array,
};

export default OrderDetails;

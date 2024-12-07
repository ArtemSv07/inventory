import css from "./Orders.module.css";
import { orders, products } from "../../date.js";
import getDate from "../../utils/getDate.js";
import { FaListUl } from "react-icons/fa6";
import RightArrow from "../../components/RightArrow/RightArrow.jsx";
import DeleteButton from "../../components/DeleteButton/DeleteButton.jsx";

import OrderDetails from "../../components/OrderDetails/OrderDetails.jsx";
// import Popup from "./Popup";
import PropTypes from "prop-types";

const Orders = ({ selectedOrder, setSelectedOrder }) => {
  // const [isPopupOpen, setPopupOpen] = useState(false); // Для попапу

  // Розрахунок кількості продуктів та суми для кожного приходу
  const calculateOrderData = (orderId) => {
    const orderProducts = products.filter(
      (product) => product.order === orderId
    );
    const totalPrice = orderProducts.reduce(
      (acc, product) => {
        const defaultPrice = product.price.find((p) => p.isDefault);
        return {
          UAH: acc.UAH + defaultPrice.value,
          USD: acc.USD + product.price.find((p) => p.symbol === "USD").value,
        };
      },
      { UAH: 0, USD: 0 }
    );

    return { count: orderProducts.length, totalPrice };
  };

  return (
    <div className={css.container}>
      <div className={css.orderGrup}>
        {orders.map((order) => {
          const { count, totalPrice } = calculateOrderData(order.id);
          return (
            <div key={order.id} className={css.orderContainer}>
              <div className={css.containerTitle}>
                {!selectedOrder && (
                  <h3
                    className={css.title}
                    data-full-text={order.title}
                    tabIndex="0"
                  >
                    {order.title}
                  </h3>
                )}
                <button
                  className={css.buttonList}
                  onClick={() => setSelectedOrder(order)}
                >
                  <FaListUl size={30} color="#5a737f" />
                </button>
              </div>

              <div className={css.containerText}>
                <p className={css.text}>
                  <span className={css.textSpan}>{count} шт.</span> Продукта
                </p>
                <div className={css.textDateContainer}>
                  <p className={css.textDate}>{getDate(order.date)}</p>
                  <p>{getDate(order.date, "fullDate")}</p>
                </div>
                {!selectedOrder && (
                  <p className={css.textMany}>
                    <span className={css.textDate}>{totalPrice.USD} $</span>
                    {totalPrice.UAH} UAH
                  </p>
                )}

                {selectedOrder?.id === order.id && <RightArrow />}
                {!selectedOrder && <DeleteButton />}
              </div>
            </div>
          );
        })}
      </div>
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          products={products.filter(
            (product) => product.order === selectedOrder.id
          )}
          closeDetails={() => setSelectedOrder(null)}
        />
      )}
      {/* {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />} */}
    </div>
  );
};

Orders.propTypes = {
  setSelectedOrder: PropTypes.func,
  selectedOrder: PropTypes.object,
};

export default Orders;

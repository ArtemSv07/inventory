import PropTypes from "prop-types";
import css from "./OrderDetails.module.css";
import { IoCloseOutline } from "react-icons/io5";
import AddButton from "../AddButton/AddButton";
import leptop from "../../icons/leptop.webp";
import DeleteButton from "../DeleteButton/DeleteButton";

const OrderDetails = ({ closeDetails, order, products }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={closeDetails}>
        <IoCloseOutline size={20} />
      </button>
      <div className={css.titleContainer}>
        <h2 className={css.title} data-full-text={order.title} tabIndex="0">
          {order.title}
        </h2>
        <AddButton sizeIcon={20} textTitle={"Добавить продукт"} />
      </div>
      <ul>
        {products.map((product) => (
          <li className={css.listProductsContainer} key={product.id}>
            <div className={css.circle}></div>
            <img
              className={css.photo}
              width={35}
              height={35}
              src={leptop}
              alt="logo"
            />
            <ul>
              <li>
                <p>{product.title}</p>
                <p> {product.serialNumber}</p>
              </li>
            </ul>
            <div className={css.deleteButton}>
              <DeleteButton />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

OrderDetails.propTypes = {
  closeDetails: PropTypes.func,
  order: PropTypes.object,
  products: PropTypes.array,
};

export default OrderDetails;

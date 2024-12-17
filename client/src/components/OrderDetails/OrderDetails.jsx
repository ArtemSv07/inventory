import PropTypes from "prop-types";
import css from "./OrderDetails.module.css";

import AddButton from "../AddButton/AddButton";
import leptop from "../../icons/leptop.webp";
import DeleteButton from "../DeleteButton/DeleteButton";
import CloseButton from "../CloseButton/CloseButton";

const OrderDetails = ({ closeDetails, order, products }) => {
  return (
    <div className={css.container}>
      <CloseButton setOpen={closeDetails} />
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
                <p className={css.titleDetails}>{product.title}</p>
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

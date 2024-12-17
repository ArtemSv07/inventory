import PropTypes from "prop-types";
import css from "./Poput.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders } from "../../redux/inventorySlice";
import CloseButton from "../CloseButton/CloseButton";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProducts } from "../../redux/productsOps";

const Popup = ({ setPopupOpen, orderId }) => {
  const dispatch = useDispatch();
  const order = useSelector(selectOrders);
  console.log(orderId);

  return (
    <div className={css.container}>
      <div className={css.popupGrup}>
        <div className={css.popup}>
          <CloseButton setOpen={setPopupOpen} />
          <h3>Ви уверени что хотите удалить этот приход?</h3>
          {order
            .filter((element) => element.id === orderId)
            .map((element) => (
              <p key={element.id}>{element.title}</p>
            ))}
        </div>
        <ul className={css.buttonList}>
          <li>
            <button
              className={css.cancelButton}
              onClick={() => setPopupOpen(false)}
            >
              ОТМЕНИТЬ
            </button>
          </li>
          <li>
            <button
              className={css.deleteButton}
              onClick={() => dispatch(deleteProducts(orderId))}
            >
              <RiDeleteBin5Line />
              <span>УДАЛИТЬ</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Popup.propTypes = {
  setPopupOpen: PropTypes.func,
  orderId: PropTypes.number,
};

export default Popup;

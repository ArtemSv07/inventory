import css from "./DeleteButton.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import PropTypes from "prop-types";

const DeleteButton = ({ setPopupOpen, orderId, setOrderId }) => {
  const handlerClick = () => {
    setPopupOpen(true);
    setOrderId(orderId);
  };
  return (
    <button onClick={handlerClick} className={css.button} type="button">
      <RiDeleteBin5Line color="#546e7a" size={20} />
    </button>
  );
};

DeleteButton.propTypes = {
  setPopupOpen: PropTypes.func,
  setOrderId: PropTypes.func,
  orderId: PropTypes.number,
};

export default DeleteButton;

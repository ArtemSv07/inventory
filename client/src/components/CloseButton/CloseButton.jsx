import css from "./CloseButton.module.css";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const CloseButton = ({ setOpen }) => {
  return (
    <button className={css.button} onClick={() => setOpen(false)}>
      <IoCloseOutline size={20} />
    </button>
  );
};

CloseButton.propTypes = {
  setOpen: PropTypes.func,
};
export default CloseButton;

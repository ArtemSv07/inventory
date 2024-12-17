import PropTypes from "prop-types";
import css from "./ToggleBotton.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";

const BurgerButton = ({ handleToggle, buttonName }) => {
  return (
    <button
      type="button"
      onClick={() => handleToggle()}
      className={buttonName === "burger" ? css.burgerButton : css.close}
    >
      {buttonName === "burger" ? (
        <RxHamburgerMenu size={34} />
      ) : (
        <IoIosCloseCircleOutline size={30} />
      )}
    </button>
  );
};

BurgerButton.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default BurgerButton;

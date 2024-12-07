import css from "./AddButton.module.css";
import { IoAdd } from "react-icons/io5";
import PropTypes from "prop-types";

const AddProduct = ({ sizeIcon, textTitle }) => {
  return (
    <button onClick={() => {}} type="button" className={css.button}>
      <div className={css.iconContainer}>
        <IoAdd color="white" size={sizeIcon} />
      </div>
      <p className={textTitle === "Добавить продукт" ? css.text : css.title}>
        {textTitle}
      </p>
    </button>
  );
};

AddProduct.propTypes = {
  sizeIcon: PropTypes.number,
  textTitle: PropTypes.string,
};

export default AddProduct;

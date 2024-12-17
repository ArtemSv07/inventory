import css from "./AddButton.module.css";
import { IoAdd } from "react-icons/io5";
import PropTypes from "prop-types";
import clsx from "clsx";

const AddProduct = ({ sizeIcon, textTitle }) => {
  return (
    <div className={css.container}>
      <button onClick={() => {}} type="button" className={css.button}>
        <div
          className={clsx(
            css.iconContainer,
            textTitle !== "Добавить продукт" && css.iconTitle
          )}
        >
          <IoAdd color="white" size={sizeIcon} />
        </div>
        {textTitle === "Добавить продукт" && (
          <p className={css.text}>{textTitle}</p>
        )}
      </button>

      {textTitle !== "Добавить продукт" && (
        <h2 className={css.title}>{textTitle}</h2>
      )}
    </div>
  );
};

AddProduct.propTypes = {
  sizeIcon: PropTypes.number,
  textTitle: PropTypes.string,
};

export default AddProduct;

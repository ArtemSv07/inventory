import css from "./DeleteButton.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteButton = () => {
  return (
    <button
      onClick={() => {
        console.log("delete");
      }}
      className={css.button}
      type="button"
    >
      <RiDeleteBin5Line color="#546e7a" size={20} />
    </button>
  );
};

export default DeleteButton;

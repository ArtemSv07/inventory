import css from "./RightArrow.module.css";
import { FaChevronRight } from "react-icons/fa6";

const RightArrow = () => {
  return (
    <div className={css.container}>
      <FaChevronRight />
    </div>
  );
};

export default RightArrow;

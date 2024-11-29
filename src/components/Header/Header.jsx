import css from "./Header.module.css";
import ToggleBotton from "../ToggleButton/ToggleBotton";
import PropTypes from "prop-types";
import clsx from "clsx";

const Header = ({ handleToggle }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerContainer, "container")}>
        <ToggleBotton handleToggle={handleToggle} buttonName="burger" />
        <div>Header</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Header;

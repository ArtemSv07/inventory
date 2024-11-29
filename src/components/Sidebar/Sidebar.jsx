import css from "./Sidebar.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import ToggleBotton from "../ToggleButton/ToggleBotton";

const Sidebar = ({ toggle, handleToggle }) => {
  return (
    <aside className={toggle ? css.sidebar : clsx(css.isOpen, css.sidebar)}>
      <ToggleBotton handleToggle={handleToggle} buttonName="close" />
      <Navigation handleToggle={handleToggle} />
    </aside>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Sidebar;

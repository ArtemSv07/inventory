import css from "./Sidebar.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import ToggleBotton from "../ToggleButton/ToggleBotton";
import Avatar from "../Avatar/Avatar";

const Sidebar = ({ toggle, handleToggle }) => {
  return (
    <aside className={clsx(css.sidebar, toggle && css.isOpen)}>
      <ToggleBotton handleToggle={handleToggle} buttonName="close" />
      <Avatar />
      <Navigation handleToggle={handleToggle} />
    </aside>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Sidebar;

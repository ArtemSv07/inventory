import css from "./Header.module.css";
import ToggleBotton from "../ToggleButton/ToggleBotton";
import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import SerchInput from "../SerchInput/SerchInput";
import TopMenu from "../TopMenu/TopMenu";

const Header = ({ handleToggle }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerContainer, "container")}>
        <ToggleBotton handleToggle={handleToggle} buttonName="burger" />
        <div className={css.unite}>
          <Logo />
          <SerchInput />
        </div>
        <TopMenu />
      </div>
    </header>
  );
};

Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Header;

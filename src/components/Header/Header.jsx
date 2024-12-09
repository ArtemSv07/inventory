import css from "./Header.module.css";
import ToggleBotton from "../ToggleButton/ToggleBotton";
import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import SerchInput from "../SerchInput/SerchInput";
import getDate from "../../utils/getDate";
import { LuClock8 } from "react-icons/lu";

const Header = ({ handleToggle }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerContainer, "container")}>
        <ToggleBotton handleToggle={handleToggle} buttonName="burger" />
        <div className={css.unite}>
          <Logo />
          <SerchInput />
        </div>
        <div className={css.timeContainer}>
          <ul>
            <li>
              <p>Today</p>
            </li>
            <li>
              <p>{getDate(undefined, "en")}</p>
            </li>
          </ul>
          <div className={css.onlineTimeContainer}>
            <LuClock8 color="#5c8e29" />
            <div>{`${new Date().getHours()} : ${new Date().getMinutes()}`}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Header;

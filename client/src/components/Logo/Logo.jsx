import css from "./Logo.module.css";
import icon from "../../icons/1.png";

const Logo = () => {
  return (
    <a className={css.logo} href="/">
      <img
        className={css.icon}
        src={icon}
        alt="Зелёный щит с силуэтом человека внутри"
      />
      <p className={css.text}>INVENTORY</p>
    </a>
  );
};

export default Logo;

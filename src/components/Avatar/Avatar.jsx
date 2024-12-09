import css from "./Avatar.module.css";
import PropTypes from "prop-types";
import src from "../../icons/canva.jpg";
import { IoMdSettings } from "react-icons/io";

const Avatar = ({ alt }) => {
  return (
    <div className={css.container}>
      <img
        src={src}
        alt={alt || "Аватар користувача"}
        className={css.avatar}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
        }}
      />
      <button
        className={css.settingButton}
        onClick={() => {
          console.log("setting avatar");
        }}
        type="button"
      >
        <IoMdSettings color="#546e7a" size={15} />
      </button>
    </div>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
};

export default Avatar;

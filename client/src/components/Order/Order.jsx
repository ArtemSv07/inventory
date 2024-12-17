import { NavLink } from "react-router-dom";
import css from "./Order.module.css";
import PropTypes from "prop-types";

const Information = ({ elem }) => {
  return (
    <div className={css.container}>
      <NavLink to="information">
        <h2>{elem.title}</h2>
      </NavLink>
    </div>
  );
};

Information.propTypes = {
  elem: PropTypes.object.isRequired,
};

export default Information;

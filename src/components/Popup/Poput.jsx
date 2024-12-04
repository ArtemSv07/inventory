import PropTypes from "prop-types";

const Popup = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          margin: "auto",
          padding: "20px",
          maxWidth: "300px",
        }}
      >
        <h3>Ви впевнені?</h3>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.bool,
};

export default Popup;

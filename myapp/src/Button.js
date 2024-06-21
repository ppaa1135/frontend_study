import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button class={styles.btn}>{text}</button>;
}

Button.protTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

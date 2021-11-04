import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomerList.module.scss";

const CustomerList = ({ subtitle, description }) => (
  <div className={styles.text__card}>
    <h3 className={styles.text__subtitle}>{subtitle}</h3>
    <h4 className={styles.text__description}> {description} </h4>
  </div>
);

CustomerList.propTypes = {
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CustomerList;

import React from "react";
import styles from "./ModalView.module.css";

const ModalView = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return <div className={styles.backdrop}></div>;
};

export default ModalView;

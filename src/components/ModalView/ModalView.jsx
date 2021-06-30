import React, { useState } from "react";
import styles from "./ModalView.module.css";

const ModalView = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    console.log("clicked");
    console.log(e.target.classList);
    if (e.target.classList.contains("ModalView_backdrop__tYsYF")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleClick}>
      <img src={selectedImg} alt="enlarged-pic"></img>
    </div>
  );
};

export default ModalView;

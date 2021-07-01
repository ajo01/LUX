import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    media: {
      maxWidth: "100%",
      maxHeight: 580,
    },
    paper: {
      position: "relative",
      boxShadow: "none",
      outline: "none",
      cursor: "pointer",
    },
    overlay: {
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
    },
    text: {
      margin: "10%",
    },
  })
);

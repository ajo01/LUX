import { makeStyles, createStyles, fade } from "@material-ui/core/styles";

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
      "&:hover": {
        backgroundColor: "black",
      },
      overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "black",
        backgroundColor: "white",
      },
    },
  })
);

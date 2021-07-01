import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    border: "solid 3px white",
    color: "white",
    width: "150px",
    padding: "7px",
    fontSize: "1.2rem",
  },
  center: {
    width: "100%",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "5%",
    bottom: "0",
    right: "5%",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  paper: {
    position: "relative",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
  },
  title: {
    marginTop: "2rem",
    align: "center",
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
}));

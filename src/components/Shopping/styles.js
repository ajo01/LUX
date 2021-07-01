import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    border: "solid 3px white",
    color: "white",
    width: "150px",
    padding: "7px",
    fontSize: "1.2rem",
    marginTop: "5rem",
  },
  center: {
    width: "100%",
    textAlign: "center",
  },
  textH4: {
    paddingTop: "2rem",
  },
  textH5: {
    paddingTop: "5px",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  paper: {
    position: "relative",
    boxShadow: "none",
    outline: "none",
  },
  textGroup: {
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "left",
    position: "relative",
    left: "15%",
    top: "2rem",
    maxWidth: "70%",
  },
  title: {
    marginTop: "2rem",
    align: "center",
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
}));

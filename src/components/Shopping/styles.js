import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  center: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginTop: "2rem",
    align: "center",
    textAlign: "center",
  },
  toolbar: theme.mixins.toolbar,
}));

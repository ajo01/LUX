import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(() =>
  createStyles({
    root: {
      maxWidth: "100%",
      boxShadow: "none",
    },
    media: {
      height: 0,
      paddingTop: "66%",
      "&hover": {
        zdepth: 3,
      },
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

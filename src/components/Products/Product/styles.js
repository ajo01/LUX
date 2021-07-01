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
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    cardHovered: {
      maxWidth: "100%",
      boxShadow: "none",
      transform: "scale3d(1.07, 1.07, 1)",
      transition: "transform .2s ease-in-out",
    },
  })
);

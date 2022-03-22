import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  iconbutton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit",
  },
  linkBtn: {
    textTransform: "none",
  },
}));
function Header() {
  const classes = useStyles();
  const history = useHistory();

  return <div>Header</div>;
}

export default Header;

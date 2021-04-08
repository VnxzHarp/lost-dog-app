import React from "react";
//components
import { Card } from "@material-ui/core";
//styles
import { useStyles } from "./ResponsiveCardLayout.styles";
interface Props {
  children: any;
}
export const ResponsiveCardLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
};

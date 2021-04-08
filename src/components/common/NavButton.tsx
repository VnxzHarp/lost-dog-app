import React from "react";
//components
import { Button } from "@material-ui/core";
//styles
import { useStyles } from "./NavButton.styles";

interface Props {
  disabled?: boolean;
  text: string;
  to?: any;
  component?: any;
  type?: "button" | "reset" | "submit" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const NavButton: React.FC<Props> = ({
  disabled,
  text,
  to,
  component,
  type,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.navButton}
      component={component}
      to={to}
      disabled={disabled}
      size="medium"
      variant="contained"
      color="primary"
      type={type}>
      {text}
    </Button>
  );
};

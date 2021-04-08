import React from "react";
//components
import { CardActions, Button } from "@material-ui/core";
//styles
import { useStyles } from "./CenteredButton.styles";

interface Props {
  disabled?: boolean;
  text: string;
  to?: any;
  component?: any;
  type?: "button" | "reset" | "submit" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CenteredButton: React.FC<Props> = ({
  disabled,
  text,
  to,
  component,
  type,
  variant,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <CardActions className={classes.cardButton}>
      <Button
        onClick={onClick}
        className={classes.centerButton}
        component={component}
        to={to}
        disabled={disabled}
        size="large"
        color="secondary"
        variant={variant}
        type={type}>
        {text}
      </Button>
    </CardActions>
  );
};

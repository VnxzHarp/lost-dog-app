import { useScrollTrigger, Zoom } from "@material-ui/core";
import { useStyles } from "./ScrollTop.styles";

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default ScrollTop;

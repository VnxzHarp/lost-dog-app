//components
import MediaHeader from "../common/MediaHeader";
import AngryDoge from "../../AngryDoge.png";
import { MyForm } from "./MyForm";
import { CardContent, Card } from "@material-ui/core";
//styles
import { useStyles } from "./FormPage.styles";

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <MediaHeader
        src={AngryDoge}
        alt="DogFinderApp"
        title="DogFinderApp"
        height="140"
      />

      <CardContent>
        <MyForm onSubmit={({}) => {}} />
      </CardContent>
    </Card>
  );
};

export default AboutPage;

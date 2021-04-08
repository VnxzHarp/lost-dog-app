import DogeCoin from "../../DogeCoin.jpg";
//components
import MediaHeader from "../common/MediaHeader";
import { CenteredButton } from "../common/CenteredButton";
import { ResponsiveCardLayout } from "../common/ResponsiveCardLayout";
import { CardContent, Typography } from "@material-ui/core";
//styles

const AboutPage = () => {
  return (
    <ResponsiveCardLayout>
      <MediaHeader
        alt="DogFinderApp"
        height="140"
        src={DogeCoin}
        title="DogFinderApp"
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h4" component="h2">
          About Page
        </Typography>
        <Typography
          align="justify"
          variant="body2"
          color="textSecondary"
          component="p">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </CardContent>
      <CenteredButton
        text="Donate"
        variant="contained"
        onClick={() => {
          alert("Graciela");
        }}
      />
    </ResponsiveCardLayout>
  );
};

export default AboutPage;

import { Link } from "react-router-dom";
import DogeCoin from "../../DogeCoin.jpg";
//components
import { CenteredButton } from "../common/CenteredButton";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ResponsiveCardLayout } from "../common/ResponsiveCardLayout";
import MediaHeader from "../common/MediaHeader";

const HomePage = () => {
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
          Help Lost Doggos
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This is app was made to help doggos who are far from home, if you see
          a stray doggo, help us uploading his position and taking a photo of
          him. You can post your lost doggos aswell. This is app was made to
          help doggos who are far from home, if you see a stray doggo, help us
          uploading his position and taking a photo of him. You can post your
          lost doggos aswell. This is app was made to help doggos who are far
          from home, if you see a stray doggo, help us uploading his position
          and taking a photo of him. You can post your lost doggos aswell. This
          is app was made to help doggos who are far from home, if you see a
          stray doggo, help us uploading his position and taking a photo of him.
          You can post your lost doggos aswell. This is app was made to help
          doggos who are far from home, if you see a stray doggo, help us
          uploading his position and taking a photo of him. You can post your
          lost doggos aswell. This is app was made to help doggos who are far
          from home, if you see a stray doggo, help us uploading his position
          and taking a photo of him. You can post your lost doggos aswell. This
          is app was made to help doggos who are far from home, if you see a
          stray doggo, help us uploading his position and taking a photo of him.
          You can post your lost doggos aswell.
        </Typography>
      </CardContent>
      <CenteredButton
        text="Report"
        component={Link}
        to="/form"
        variant="contained"
      />
    </ResponsiveCardLayout>
  );
};

export default HomePage;

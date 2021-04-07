import React from "react";
//components
import { CardMedia, CardActionArea } from "@material-ui/core";
//types

interface Props {
  src: string;
  height?: string;
  alt: string;
  title: string;
}

const MediaHeader: React.FC<Props> = ({ src, height, alt, title }) => {
  return (
    <CardActionArea>
      <CardMedia
        component="img"
        alt={alt}
        height={height}
        src={src}
        title={title}
      />
    </CardActionArea>
  );
};

export default MediaHeader;

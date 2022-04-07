import React from "react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "./Socials.scss";

import IconButton from "@mui/material/IconButton";
class Socials extends React.Component {
  render() {
    return (
      <div className="socials-container">
        <IconButton href="https://facebook.com/sanderbreivik">
          <Facebook />
        </IconButton>
        <IconButton href="https://instagram.com/sanderbreivik">
          <Instagram />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/sanderbreivik/">
          <LinkedIn />
        </IconButton>
      </div>
    );
  }
}

export default Socials;

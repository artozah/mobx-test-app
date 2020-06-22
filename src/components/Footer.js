import React from "react";
import Box from "@material-ui/core/Box";
import { lightBlue } from "@material-ui/core/colors";
import common from "@material-ui/core/colors/common";

function Footer() {
  return (
    <Box p={3} bgcolor={lightBlue} color={common.white}>
      Footer
    </Box>
  );
}

export default Footer;

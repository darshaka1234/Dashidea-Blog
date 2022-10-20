import React from "react";

import { Box } from "@mui/system";

import Posts from "./Posts";
const Feed = () => {
  return (
    <Box flex={2} p={2}>
      <Posts image="./1.jpg" />
      <Posts image="./2.jpg" />
      <Posts image="./3.jpg" />
      <Posts image="./4.jpg" />
      <Posts image="./5.jpg" />
    </Box>
  );
};

export default Feed;

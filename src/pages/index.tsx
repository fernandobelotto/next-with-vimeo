import { Box, Heading } from "@chakra-ui/react";
import Player from "@vimeo/player";
import React, { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    var options01 = {
      id: 715848386,
      width: 1000,
    };

    var video01Player = new Player("{video01_name}", options01);

    video01Player.setVolume(0);

    video01Player.on("play", function () {
      console.log("Played the first video");
    });
  }, []);

  return (
    <Box p={5}>
      <Heading>vimeo with nextjs</Heading>
      <Box id="{video01_name}"></Box>
    </Box>
  );
}

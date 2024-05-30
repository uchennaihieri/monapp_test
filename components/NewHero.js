import React from "react";
import { Box, Image } from "@chakra-ui/react";

import Navbar from "./navbar";

function NewHero({ children }) {
  return (
    <Box
      bg="#000000"
      h={{ base: "66.85rem", md: "56.5rem", "2xl": "56.5rem" }}
      w="100%"
      bgImage="url('/herobg.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      position={"relative"}
    >
      <div>
        <Navbar />
      </div>

      {children}

      <Image
        src="/Ellipse.svg"
        pos={"absolute"}
        top={{ base: "0", md: "20rem" }}
        left={{ base: "15%", md: "-5rem" }}
        transform={{ md: "rotate(270deg)" }}
        w={{ md: "27.976875rem" }}
        h={{ md: "27.976875rem" }}
      />

      <Image
        src="/Spiral.png"
        pos={"absolute"}
        bottom={"0"}
        right={"0"}
        display={["block", "none"]}
      />
    </Box>
  );
}

export default NewHero;

import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

import Navbar from "./navbar";

function NewHero({ children }) {
  return (
    <Box
      bg="#000000"
      h={{ base: "66.85rem", md: "56.5rem", "2xl": "56.5rem" }}
      w="100%"
      backgroundColor={"#1A1A1A"}
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
        className="absolute top-0 md:top-80 left-[15%] md:left-[-5rem] md:transform md:rotate-[270deg] md:w-[27.976875rem] md:h-[27.976875rem]"
        alt="ellipse-image"
        width={500}
        height={500}
      />

      <Image
        src="/Spiral.png"
        className="absolute top-auto md:top-0 bottom-[-3rem] md:bottom-auto right-16 md:right-0 h-[16.429375rem] md:h-[38.0175rem] w-[8.191875rem] md:w-[17.4675rem] object-cover transform rotate-90 md:rotate-0 opacity-90"
        alt="spiral-image"
        width={500}
        height={500}
      />
    </Box>
  );
}

export default NewHero;

import React from "react";
import { Box } from "@chakra-ui/react";

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
    >
      <div>
        <Navbar />
      </div>

      {children}
    </Box>
  );
}

export default NewHero;

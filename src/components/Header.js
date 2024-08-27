import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light" ? "#444" : "white";

  return (
    <>
      <Box
        maxW="450px"
        w="100%"
        h="50px"
        pos="fixed"
        left="50%"
        top="0"
        transform="translateX(-50%)"
        bgColor="rgba(255, 255, 255, 0.2)"
        filter="auto"
        blur="20px"
      />
      <Container
        maxW="450px"
        w="100%"
        h="50px"
        pos="fixed"
        left="50%"
        top="0"
        zIndex={99}
        transform="translateX(-50%)"
        justifyContent="center"
        centerContent
      >
        <Link to={"/"}>
          <Text fontSize="20px" fontWeight="700" color={isDark}>
            DOPA CHECK
          </Text>
        </Link>
        <Box
          onClick={toggleColorMode}
          borderRadius="30px 30px 30px 0"
          cursor="pointer"
          pos="absolute"
          right="5%"
        >
          {colorMode === "light" ? (
            <SunIcon boxSize={6} />
          ) : (
            <MoonIcon boxSize={6} />
          )}
        </Box>
      </Container>
    </>
  );
};

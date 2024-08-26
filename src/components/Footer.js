import { Container, Flex, Text } from "@chakra-ui/react";

export const Footer = ({ colorMode }) => {
  return (
    <Container
      maxW={450}
      w={"100%"}
      h={"50px"}
      bg={colorMode === "light" ? "#c1c1c1" : "#1d1d1d"}
      color={"#fff"}
      m="0 auto"
    >
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Text>&copy; 2024. JongInHey.</Text>
      </Flex>
    </Container>
  );
};

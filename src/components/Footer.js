import { Container, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container
      maxW={450}
      w={"100%"}
      h={"50px"}
      bg="#c1c1c1"
      color={"#fff"}
      m="0 auto"
    >
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Text>&copy; 2024. JongInHey.</Text>
      </Flex>
    </Container>
  );
};

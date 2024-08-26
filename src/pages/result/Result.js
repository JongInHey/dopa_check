import { Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";

export const Result = () => {
  return (
    <>
      <PageTitle titleName={"Result"} />
      <Container
        maxW="450px"
        w="100%"
        h="100vh"
        p={"70px 20px 0 20px"}
        m={"0 auto"}
        pos="relative"
      >
        결과 페이지
      </Container>
    </>
  );
};

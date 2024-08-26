import { Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading";

export const Result = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();
  const { scores } = state;

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  console.log(scores);
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
        {isLoading ? <Loading /> : "결과 페이지"}
      </Container>
    </>
  );
};

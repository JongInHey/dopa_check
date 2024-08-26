import { Button, Container, Text } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Link, useLocation } from "react-router-dom";
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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Text>결과 페이지</Text>
            <Link to={"/"}>
              <Button
                w="80%"
                bg="#11e6d8"
                color="#fff"
                boxShadow={"0 0 10px rgba(0,0,0,0.2)"}
                _hover={{
                  bg: "teal.300",
                  transform: "scale(1.05)",
                }}
                _active={{ bg: "teal.400" }}
              >
                테스트 다시하기
              </Button>
            </Link>
          </>
        )}
      </Container>
    </>
  );
};

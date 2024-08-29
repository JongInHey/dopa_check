import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PageTitle } from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

export const PageNotFound = ({ colorMode }) => {
  const navi = useNavigate();
  return (
    <>
      <PageTitle titleName={"없습니다!"} />
      <Container
        maxW="450px"
        w="100%"
        h="100vh"
        p={"70px 20px 0 20px"}
        pos="relative"
        boxShadow={
          colorMode === "light"
            ? "0 0 15px rgba(0,0,0,0.1)"
            : "0 0 15px rgba(255, 255, 255, 0.1)"
        }
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center">
          <Box>
            <Heading fontSize="50px" fontWeight="700" color="#11e6d8" mb={4}>
              404
            </Heading>
            <Text fontSize="lg" mb={4}>
              페이지를 찾을 수 없습니다.
            </Text>
            <Text mb={6}>
              요청하신 페이지는 존재하지 않거나, <br />
              잘못 이동된 것 같습니다.
              <br />
              올바른 주소를 입력했는지 확인해 주세요.
            </Text>
          </Box>
          <Button
            bgColor="#11e6d8"
            color="#fff"
            size="lg"
            _hover={{ bg: "teal.300" }}
            onClick={() => navi("/")}
          >
            홈으로 돌아가기
          </Button>
        </VStack>
      </Container>
    </>
  );
};

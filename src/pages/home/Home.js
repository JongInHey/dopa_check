import { Box, Button, Container, Heading, Img, Text } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export const Home = ({ colorMode }) => {
  useScrollTop();

  const imgUrl =
    "https://doda-static.com/img/900/80/1/1/1684215947210-4585449.jpg";

  return (
    <>
      <PageTitle titleName={"Home"} />
      <Container
        maxW="450px"
        w="100%"
        h="100vh"
        p={"70px 20px 0 20px"}
        m={"0 auto"}
        pos="relative"
        boxShadow={
          colorMode === "light"
            ? "0 0 15px rgba(0,0,0,0.1)"
            : "0 0 15px rgba(255, 255, 255, 0.1)"
        }
      >
        <Box textAlign={"center"} mt={14}>
          <Heading fontSize="30px" fontWeight="700" color="#11e6d8">
            도파민 중독 테스트
          </Heading>
          <Text fontSize="18px" fontWeight="400" mt={6}>
            난 '이것'이 없으면 불안하다고?!😨 <br />
            도파민😆! 도파민😆! 테스트 해보고 <br />내 안의 도파민 농도 Check!
          </Text>
        </Box>
        <Box>
          <Img
            w={"95%"}
            src={imgUrl}
            alt="도파민 중독?"
            borderRadius="20px"
            objectFit="cover"
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            bottom="26%"
            boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
          />
        </Box>

        <Link to={"/qna"}>
          <Button
            w="80%"
            bg="#11e6d8"
            pos="absolute"
            left="50%"
            bottom="13%"
            transform="translateX(-50%)"
            color="#fff"
            boxShadow={
              colorMode === "light"
                ? "0 0 10px rgba(0,0,0,0.2)"
                : "0 0 10px rgba(255, 255, 255, 0.2)"
            }
            _hover={{
              bg: "teal.300",
              transform: "translateX(-50%) scale(1.05)",
            }}
            _active={{ bg: "teal.400" }}
          >
            테스트 시작하기!
          </Button>
        </Link>
      </Container>
    </>
  );
};

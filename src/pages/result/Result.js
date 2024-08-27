import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { ResultName } from "../../components/ResultName";

export const Result = ({ colorMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();
  const { scores } = state;

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const totalScore = () => {
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    console.log(total);
  };
  console.log(scores);
  totalScore();
  console.log(ResultName[0]);
  return (
    <>
      <PageTitle titleName={"Result"} />
      <Container
        maxW="450px"
        w="100%"
        h={isLoading ? "100vh" : ""}
        p={"70px 20px"}
        m={"0 auto"}
        pos="relative"
        boxShadow={
          colorMode === "light"
            ? "0 0 15px rgba(0,0,0,0.1)"
            : "0 0 15px rgba(255, 255, 255, 0.1)"
        }
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Box
              w={"150px"}
              bgColor="#11e6d8"
              textAlign="center"
              borderRadius={"20px"}
              p={2}
              fontWeight="600"
              m={"10px auto"}
            >
              도파민 중독 테스트
            </Box>
            <Text fontSize="18px" fontWeight="600" textAlign={"center"}>
              내 혈중 도파민의 농도는 • • •
            </Text>
            <Image
              src={process.env.PUBLIC_URL + ResultName[0].img}
              alt={ResultName[0].title}
              w={"200px"}
              m={"0 auto"}
            />
            <Box
              maxW="450px"
              w="100%"
              p={"20px 10px"}
              bgColor={colorMode === "light" ? "" : "rgba(0, 0, 0, 0.2)"}
              boxShadow="0px 5px 15px 0px rgba(13, 190, 175, 0.19)"
              borderRadius={"20px"}
              wordBreak={"keep-all"}
            >
              <Text fontSize="22px" fontWeight="700" textAlign={"center"}>
                {ResultName[0].title}
              </Text>
              <UnorderedList
                mt={8}
                marginInlineStart={7}
                listStyleType="disclosure-closed"
              >
                {ResultName[0].desc.map((list) => (
                  <ListItem
                    mb={4}
                    lineHeight={1.6}
                    fontWeight="500"
                    opacity={"0.7"}
                  >
                    {list.text}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Link to={"/"}>
              <Button
                w="80%"
                bg="#11e6d8"
                left="50%"
                transform="translateX(-50%)"
                mt={20}
                color="#fff"
                boxShadow={
                  colorMode === "light"
                    ? "0 0 15px rgba(0,0,0,0.1)"
                    : "0 0 15px rgba(255, 255, 255, 0.1)"
                }
                _hover={{
                  bg: "teal.300",
                  transform: "translateX(-50%) scale(1.05)",
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

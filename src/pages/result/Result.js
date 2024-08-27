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
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { ResultName } from "../../components/ResultName";
import { RepeatIcon } from "@chakra-ui/icons";

export const Result = ({ colorMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resultIndex, setResultIndex] = useState(0);
  const { state } = useLocation();
  const { scores } = state;

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    if (totalScore < 30) {
      setResultIndex(0);
    } else if (totalScore > 30 && totalScore < 60) {
      setResultIndex(1);
    } else if (totalScore > 60 && totalScore < 90) {
      setResultIndex(2);
    } else if (totalScore > 90 && totalScore < 115) {
      setResultIndex(3);
    }
  }, [totalScore]);

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
              src={process.env.PUBLIC_URL + ResultName[resultIndex].img}
              alt={ResultName[resultIndex].title}
              w={"200px"}
              m={"20px auto"}
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
              <Text
                fontSize="22px"
                fontWeight="700"
                textAlign={"center"}
                whiteSpace={"pre-wrap"}
              >
                {ResultName[resultIndex].title}
              </Text>
              <UnorderedList
                mt={8}
                marginInlineStart={7}
                listStyleType="disclosure-closed"
              >
                {ResultName[resultIndex].desc.map((list, index) => (
                  <ListItem
                    mb={4}
                    lineHeight={1.6}
                    fontWeight="500"
                    opacity={"0.7"}
                    key={index}
                  >
                    <Text>{list.text}</Text>
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
                <RepeatIcon mr={2} fontSize={"20px"} />
                테스트 다시하기
              </Button>
            </Link>
          </>
        )}
      </Container>
    </>
  );
};

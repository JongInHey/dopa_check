import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { question } from "../../components/question";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Choice = () => {
  const [page, setPage] = useState(1);
  const [gauge, setGauge] = useState();
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    const progress = (page / question.length) * 100;
    setGauge(progress);
  }, [page]);

  const handleAnswer = (score) => {
    setScores([...scores, score]);
    if (qIndex < question.length - 1) {
      setQIndex(qIndex + 1);
      setPage(page + 1);
    } else {
      navi("/result");
    }
  };

  return (
    <>
      <PageTitle titleName={"QnA"} />
      <Container
        maxW="450px"
        w="100%"
        h="100vh"
        p={"70px 20px 0 20px"}
        m={"0 auto"}
        pos="relative"
      >
        <Box
          w="100%"
          h="5px"
          bgColor="#fff"
          borderRadius="10px"
          overflow="hidden"
        >
          <Box w={`${gauge}%`} h="100%" bgColor="#11e6d8"></Box>
        </Box>
        <Text float="right" mt={1}>
          {page}/{question.length}
        </Text>

        <Flex
          mt="50%"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <Text>{question[qIndex].q}</Text>
          </Box>
          <Box w={"100%"} mt={10}>
            {question[qIndex].a.map((answer, index) => (
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                key={index}
              >
                <Button
                  onClick={() => handleAnswer(answer.score)}
                  mt={7}
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
                  {answer.text}
                </Button>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

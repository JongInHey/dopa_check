import { Flex, Text } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      pos="relative"
      top="45%"
      transform="translateY(-45%)"
    >
      <Text fontSize="20px" fontWeight="600" mr={3}>
        나의 도파민 점수 집계 중
      </Text>
      <PulseLoader color="#11e6d8" size={10} />
    </Flex>
  );
};

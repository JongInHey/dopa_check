import {
  Button,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ResultName } from "../../../components/ResultName";

export const AllResult = ({ colorMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
        onClick={onOpen}
      >
        전체 유형 결과 보기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>도파민 중독 전체 유형</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={3}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={4}
              justifyItems="center"
            >
              {ResultName.map((data) => (
                <GridItem>
                  <Image
                    borderRadius="full"
                    boxSize="100px"
                    bg={colorMode === "light" ? "#11e6d8" : "white"}
                    src={process.env.PUBLIC_URL + data.img}
                    alt={data.alt}
                    m="0 auto"
                  />
                  <Text
                    fontWeight="700"
                    whiteSpace={"pre-wrap"}
                    textAlign="center"
                  >
                    {data.alt}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

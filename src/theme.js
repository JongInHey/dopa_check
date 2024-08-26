import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: mode("gray.800", "#d9d9d9"),
      bg: mode("#f6f6f6", "#20214"),
    },
  }),
};

const fonts = {
  heading: `"Noto Sans KR", sans-serif`,
  body: `"Noto Sans KR", sans-serif`,
};

const { Button, Modal } = chakraTheme.components;

const components = {
  Button,
  Modal,
};

const theme = extendBaseTheme({
  styles,
  components,
  config,
  fonts,
});

export default theme;

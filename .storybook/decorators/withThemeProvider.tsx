import React from "react";
import { ChakraProvider, CSSReset, theme, Box } from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";

export const withThemeProvider = (Story: StoryFn<any>) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box m={4}>
      <Story />
    </Box>
  </ChakraProvider>
);

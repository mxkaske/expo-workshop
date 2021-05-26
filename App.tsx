import React from "react";
import { ThemeProvider, Box, Text } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text variant="title" textAlign="center">
          Open up App.tsx to start working on your app!
        </Text>
      </Box>
    </ThemeProvider>
  );
}

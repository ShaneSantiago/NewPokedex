import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/Home/Home";

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;

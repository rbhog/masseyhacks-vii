import { Center, Box, Button, Text, VStack } from "@chakra-ui/react";
// import Typewriter from "typewriter-effect";
import "./styles.css";

const Landing = () => {
  return (
    <>
      <Box w="100%" h="1080px" bgImage="url('./img/mapbox_dark.jpg')">
        <div className="blurContainer">
          <Center h="85%">
            <Box className="feature">
              <VStack spacing={5}>
                <Text
                  className="title"
                  fontSize="7xl"
                  bgGradient="linear(to-r, #3860C0, #C36DA1)"
                  bgClip="text"
                >
                  from
                  <pre>aa</pre>
                  import pandemic
                </Text>
                <Text className="description" fontSize="xl" maxWidth="40%">
                  visualizing income disparities and their corresponding effects
                  on populations during the COVID-19 pandemic, to develop an
                  efficient, timely vaccination schedule for local governments
                </Text>
              </VStack>
            </Box>
          </Center>

          <Button className="scrollButton" variant="ghost">
            asdf
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Landing;

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import AirportSelector from './components/AirportSelector';
import DateSelector from './components/DateSelector';

import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        'pk.eyJ1Ijoicm9iZXJ0YmFvIiwiYSI6ImNrbmJ4b2EyazB3a2kyb29vdmI4NnFhdHkifQ.eWUrs0-n2fF0u1XZhNbE4w'
      }
      width="100%"
      height="100%"
      onViewportChange={viewport => setViewport(viewport)}
    />
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <Map></Map>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

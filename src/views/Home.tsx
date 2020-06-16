import React from "react";
import styled from "styled-components";
import ReactMapboxGl from "react-mapbox-gl";

import { H1, spacingStyles } from "../components/Typography";

const Header = styled.header`
  ${spacingStyles}
`;

const Main = styled.main`
  ${spacingStyles}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiamJhcmdldCIsImEiOiJjaWhjZDE0ZW8wMmJjdGNsejl0M2JiZnZvIn0.RpRDGObfdNuHY3LwNUZjug",
});

const Home = () => {
  return (
    <div>
      <Header pv={5}>
        <H1 fontSize={5} ta="center">
          Phantom Dwellings
        </H1>
      </Header>
      <Main pt={10}>
        <Map
          style="mapbox://styles/jbarget/ckbietym61evp1is6v1wk19rw"
          center={[137.790811, -29.044414]}
          zoom={[3]}
          containerStyle={{
            height: "70vh",
            width: "50vw",
          }}
        ></Map>
      </Main>
    </div>
  );
};

export default Home;

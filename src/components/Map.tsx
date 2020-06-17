// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

import { StoryStep } from "../types/story.types";

const MapContainer = styled.div`
  width: 50%;
  height: 70vh;
`;

interface MapProps {
  currentStep: StoryStep;
}
const Map = (props: MapProps) => {
  const [map, setMap] = useState<mapboxgl.Map>(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [132.222, -27.9],
        zoom: 3,
      });

      map.on("load", () => {
        setMap(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (map) {
      map.flyTo({ speed: 0.5, ...props.currentStep });
    }
  }, [map, props.currentStep]);

  return <MapContainer ref={mapContainer} />;
};

export default Map;

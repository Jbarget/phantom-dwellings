import React, { useEffect, useRef, useCallback, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

import { Marker, Chapter } from "../types/story.types";

const MapContainer = styled.div`
  width: 50%;
  height: 70vh;
  margin-bottom: 20px;
`;

const Pin = styled.div`
  width: 50px;
  height: 50px;
`;

interface MapProps {
  chapter: Chapter;
}

const Map = (props: MapProps) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainer = useRef(null);

  const addMarker = useCallback(
    (marker: Marker) => {
      if (map) {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          "Construction on the Washington Monument began in 1848."
        );
        // @ts-ignore
        new mapboxgl.Marker(Pin)
          .setLngLat(marker.center)
          .setPopup(popup) // sets a popup on this marker
          .addTo(map);
      }
    },
    [map]
  );

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;
    // @ts-ignore
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
      map.flyTo({ speed: 0.5, ...props.chapter.mapProps });
      props.chapter.markers.map(addMarker);
    }
  }, [map, props.chapter.mapProps, props.chapter.markers, addMarker]);

  return <MapContainer ref={mapContainer} />;
};

export default Map;

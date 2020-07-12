import React, { useEffect, useRef, useCallback, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

import { Marker, Chapter } from "../types/story.types";

const MapContainer = styled.div`
  width: 45%;
  height: 500px;
  margin-right: 12px;
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
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.title);
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
    const { mapProps, markers } = props.chapter;
    if (map) {
      if (mapProps) {
        map.flyTo({ speed: 0.8, ...mapProps });
      }
      if (markers) {
        markers.map(addMarker);
      }
    }
  }, [
    map,
    props.chapter,
    props.chapter.mapProps,
    props.chapter.markers,
    addMarker,
  ]);

  return <MapContainer ref={mapContainer} />;
};

export default Map;

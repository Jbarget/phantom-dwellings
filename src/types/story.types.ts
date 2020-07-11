interface MapProps {
  center: [number, number];
  zoom: number;
}

export interface Marker {
  center: [number, number];
  title: string;
  text?: string;
  image?: string;
}

export interface Chapter {
  mapProps: MapProps;
  markers: Marker[];
  data: {
    images: string[];
  };
}

export interface Story {
  triggerTimes: number[];
  audio: string;
  chapters: Chapter[];
}

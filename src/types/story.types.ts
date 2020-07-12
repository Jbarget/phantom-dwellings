interface MapProps {
  center: [number, number];
  zoom: number;
  speed?: number;
}

export interface Marker {
  center: [number, number];
  title: string;
  text?: string;
  image?: string;
}

export interface Image {
  src: string;
  alt: string;
  width?: string;
}

export interface ChapterDetails {
  images: Image[];
  text: string;
}

export interface Chapter {
  mapProps?: MapProps;
  markers: Marker[];
  details: ChapterDetails;
}

export interface Story {
  triggerTimes: number[];
  audio: string;
  chapters: Chapter[];
}

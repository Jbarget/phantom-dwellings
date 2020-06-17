export interface Chapter {
  center: [number, number];
  zoom: number;
}

export interface Story {
  triggerTimes: number[];
  audio: string;
  chapters: Chapter[];
}

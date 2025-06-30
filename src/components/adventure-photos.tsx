'use client';

import { Photos, PhotoItem } from '@/components/photos';

const adventurePhotos: PhotoItem[] = [
      {
        src: "/skiing.JPG",
        alt: "Skiing on a snowy mountain",
        caption: "Chasing powder on the slopes.",
      },
      {
        src: "/quad.PNG",
        alt: "Driving a quad through nature",
        caption: "Exploring off-road trails.",
      },
      {
        src: "/diving.PNG",
        alt: "Diving near a coral reef in Egypt",
        caption: "Discovering the underwater world of the Red Sea.",
      },
      {
        src: "/pyramids.PNG",
        alt: "Visiting the pyramids in Egypt",
        caption: "Standing in awe of ancient history.",
      },
    ];

export function AdventurePhotos() {
  return <Photos photos={adventurePhotos} title="My Adventures" />;
}
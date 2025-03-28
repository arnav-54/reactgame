import ChotaBheem from "./assets/chotbheem.jpeg";
import Oggy from "./assets/oggy.jpeg";
import Tom from "./assets/tom.jpeg";
import Doremon from "./assets/doremon.png";
import Shichan from "./assets/shincha.png";
import MotuPatlu from "./assets/motu.jpg";
import { useState } from "react";

function shuffeArray() {
  const inputArray = [
    {
      name: "oggy",
      image: Oggy,
      visible: false,
    },
    {
      name: "tom",
      image: Tom,
      visible: false,
    },
    {
      name: "bheem",
      image: ChotaBheem,
      visible: false,
    },
    {
      name: "doremon",
      image: Doremon,
      visible: false,
    },
    {
      name: "motu",
      image: MotuPatlu,
      visible: false,
    },
    {
      name: "shinchan",
      image: Shichan,
      visible: false,
    },
    {
      name: "oggy",
      image: Oggy,
      visible: false,
    },
    {
      name: "tom",
      image: Tom,
      visible: false,
    },
    {
      name: "bheem",
      image: ChotaBheem,
      visible: false,
    },
    {
      name: "doremon",
      image: Doremon,
      visible: false,
    },
    {
      name: "motu",
      image: MotuPatlu,
      visible: false,
    },
    {
      name: "shinchan",
      image: Shichan,
      visible: false,
    },
  ];

  for (var i = 0; i < inputArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * inputArray.length);

    let temp = inputArray[i];
    inputArray[i] = inputArray[randomIndex];
    inputArray[randomIndex] = temp;
  }

  return inputArray;
}

export default function useRandomImage() {
  const [images, setImages] = useState(shuffeArray());

  return [images, setImages];
}

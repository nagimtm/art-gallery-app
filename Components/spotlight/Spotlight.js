import React from "react";
import Image from "next/image";

export function Spotlight({ randomPieceObj }) {
  const { imageSource, artist } = randomPieceObj;
  return (
    <>
      <h1>Hi from SpotLight</h1>
      <p>{artist}</p>
      <Image
        src={imageSource}
        width={150}
        height={150}
        alt="randomImage"
      ></Image>
    </>
  );
}

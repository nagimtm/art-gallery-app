import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export function Spotlight({
  randomPieceObj,
  isFavorite,
  handleToggleFavorite,
}) {
  const { imageSource, artist, slug } = randomPieceObj;
  // console.log(slug);
  return (
    <>
      <h1>Hi from SpotLight</h1>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}
      />
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

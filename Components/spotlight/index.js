import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export function Spotlight({
  randomPieceObj,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const { imageSource, artist, slug } = randomPieceObj;
  // console.log(slug);
  return (
    <>
      <h1>Hi from SpotLight</h1>
      <FavoriteButton
        slug={slug}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(slug)}
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

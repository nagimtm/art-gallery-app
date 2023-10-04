import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";
import Head from "next/head.js";

const Section = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 30rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50px;
`;

export function Spotlight({ randomPieceObj, onToggleFavorite, artPiecesInfo }) {
  const { imageSource, artist, slug } = randomPieceObj;
  return (
    <>
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      <Section>
        <ImageContainer>
          <FavoriteButton
            slug={slug}
            isFavorite={
              artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(slug)}
          />
          <p>{artist}</p>
          <StyledImage
            src={imageSource}
            fill
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            alt={`randomArt_${artist}`}
          ></StyledImage>
        </ImageContainer>
      </Section>
    </>
  );
}

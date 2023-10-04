import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";
import Head from "next/head.js";

const Headline = styled.h1`
  text-align: center;
  margin-top: 10px;
  position: fixed;
  border-bottom: 1px solid black;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 10rem;
    height: 20rem;
    margin-bottom: 70px;
  }
`;
export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <Headline>Art Pieces</Headline>
      <List>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              piece={piece}
              slug={piece.slug}
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
              artPiecesInfo={artPiecesInfo}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
            />
          </li>
        ))}
      </List>
    </>
  );
}

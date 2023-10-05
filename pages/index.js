import { Spotlight } from "@/Components/spotlight";
import Head from "next/head";
export default function SpotLightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  function randomArt(maxNum) {
    const randomArtindex = Math.floor(Math.random() * maxNum);
    return pieces[randomArtindex];
  }
  const piecesArrayLength = pieces.length;
  const randomPieceObj = randomArt(piecesArrayLength);
  return (
    <>
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      <Spotlight
        randomPieceObj={randomPieceObj}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}

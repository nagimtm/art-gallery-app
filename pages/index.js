import { Spotlight } from "@/Components/Spotlight";

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
      <Spotlight
        randomPieceObj={randomPieceObj}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}

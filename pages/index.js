import { Spotlight } from "@/Components/spotlight";

export default function SpotLightPage({ pieces, handleToggleFavorite }) {
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
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

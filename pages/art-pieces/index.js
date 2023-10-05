import ArtPieces from "@/Components/artPieces";

export default function ArtPiecesPages({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}

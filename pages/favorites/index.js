import ArtPieces from "@/Components/artPieces";
export default function ArtPiecesPages({
  artPiecesInfo,
  pieces,
  onArtPiecesInfo,
  onToggleFavorite,
}) {
  const allFavorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  return (
    <>
      <ArtPieces
        pieces={allFavorites}
        onArtPiecesInfo={onArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

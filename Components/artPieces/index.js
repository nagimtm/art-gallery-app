import ArtPiecePreview from "../ArtPiecePreview";
export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul>
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
    </ul>
  );
}

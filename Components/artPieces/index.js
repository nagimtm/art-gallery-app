import ArtPiecesPreview from "../artPiecesPreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}

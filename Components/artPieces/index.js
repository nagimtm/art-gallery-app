import ArtPiecesPreview from "../artPiecesPreview";
import Link from "next/link";
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`} piece={piece}>
            <ArtPiecesPreview piece={piece} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

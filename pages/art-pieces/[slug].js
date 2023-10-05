import ArtPieceDetails from "@/Components/artPieceDetails";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  storeCommentedArtPiece,
}) {
  const [artDetailViewer, setArtDetailViewer] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setArtDetailViewer(pieces.find((piece) => piece.slug === slug));
  }, [slug, pieces, setArtDetailViewer]);

  const artPieceComments = artPiecesInfo?.find(
    (piece) => piece?.slug === artDetailViewer?.slug
  )?.comments;

  return (
    <ArtPieceDetails
      artDetailViewer={artDetailViewer}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === artDetailViewer?.slug)
          ?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(artDetailViewer.slug)}
      storeCommentedArtPiece={storeCommentedArtPiece}
      artPieceComments={artPieceComments}
    />
  );
}

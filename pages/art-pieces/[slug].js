import ArtPieceDetails from "@/Components/ArtPieceDetails";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [artDetailViewer, setArtDetailViewer] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setArtDetailViewer(pieces.find((piece) => piece.slug === slug));
  }, [slug, pieces, setArtDetailViewer]);
  return (
    <ArtPieceDetails
      imageSource={artDetailViewer?.imageSource}
      title={artDetailViewer?.title}
      artist={artDetailViewer?.artist}
      year={artDetailViewer?.year}
      genre={artDetailViewer?.genre}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === artDetailViewer?.slug)
          ?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(artDetailViewer.slug)}
    />
  );
}

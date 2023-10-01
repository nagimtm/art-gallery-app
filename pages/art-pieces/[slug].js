import ArtPieceDetails from "@/Components/artPieceDetails";
import { useRouter } from "next/router";

export default function Details({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const artDetail = pieces.find((piece) => piece.slug === slug);
  return (
    <ArtPieceDetails
      imageSource={artDetail.imageSource}
      title={artDetail.title}
      artist={artDetail.artist}
      year={artDetail.year}
      genre={artDetail.genre}
    />
  );
}

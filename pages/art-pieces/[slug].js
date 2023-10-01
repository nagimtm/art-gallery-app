import ArtPieceDetails from "@/Components/artPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
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

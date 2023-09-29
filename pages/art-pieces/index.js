import ArtPieces from "@/Components/artPieces";
import useSWR from "swr";

export default function ArtPiecesPages() {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}

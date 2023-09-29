import { ArtPieceDetail } from "@/Components/artPieceDetail/ArtPieceDetails";
import { useRouter } from "next/router";

export function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const routerQuery = useRouter.query;
  console.log(routerQuery);

  return (
    <>
      <ArtPieceDetail />
    </>
  );
}

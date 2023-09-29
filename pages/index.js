import useSWR from "swr";
import { Spotlight } from "@/Components/spotlight/Spotlight";
import Navigation from "@/Components/navigation/Navigation";
import useRouter from "next/router";

export default function SpotLightPage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const router = useRouter();

  const { data: pieces, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!pieces) return;

  console.log(pieces);

  function randomArt(maxNum) {
    const randomArtindex = Math.floor(Math.random() * maxNum);
    return pieces[randomArtindex];
  }
  const piecesArrayLength = pieces.length;
  const randomPieceObj = randomArt(piecesArrayLength);
  return (
    <>
      <Spotlight randomPieceObj={randomPieceObj} />
    </>
  );
}

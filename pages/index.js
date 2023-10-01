import useSWR from "swr";
import { Spotlight } from "@/Components/spotlight/Spotlight";
import { useState } from "react";

export default function SpotLightPage() {
  const [artPiecesInfo, setArtPiecesInfo] = useState();
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!pieces) return;

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

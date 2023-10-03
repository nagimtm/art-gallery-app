import Layout from "@/Components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "@/public/resources/lib/hook/useImmerLocalStorageState";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  // const []
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((info) =>
          info.slug === slug ? { slug, isFavorite: !info.isFavorite } : info
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  function storeCommentedArtPiece(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((info) => {
          if (info.slug === slug) {
            return info.comments
              ? { ...info, comments: [...info.comments, newComment] }
              : { ...info, comments: [newComment] };
          } else {
            return info;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          storeCommentedArtPiece={storeCommentedArtPiece}
        />
      </Layout>
    </>
  );
}

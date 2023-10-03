import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

export default function ArtPieceDetails({
  artDetailViewer,
  isFavorite,
  onToggleFavorite,
  storeCommentedArtPiece,
  artPieceComments,
}) {
  return (
    <ul>
      <li key={artDetailViewer?.slug}>
        <h2>{artDetailViewer?.name}</h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(artDetailViewer?.slug)}
        />
        <Image
          src={artDetailViewer?.imageSource}
          alt="img_title"
          height={144}
          width={144}
          loading="lazy"
        ></Image>
        <p>{artDetailViewer?.artist}</p>
        <p>{artDetailViewer?.year}</p>
        <p>{artDetailViewer?.genre}</p>
        <Link href="/art-pieces">
          <button>Go Back</button>
        </Link>
      </li>
      <li>
        {artPieceComments && <Comments artPieceComments={artPieceComments} />}
        <CommentForm
          storeCommentedArtPiece={storeCommentedArtPiece}
          slug={artDetailViewer?.slug}
        />
      </li>
    </ul>
  );
}

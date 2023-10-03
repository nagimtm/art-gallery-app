import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
export default function ArtPiecesPreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  const { imageSource, name, artist, slug } = piece;

  return (
    <>
      <h2>{name}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={imageSource} alt="img_title" height={144} width={144}></Image>
      <p>{artist}</p>
      <Link href={`art-pieces/${slug}`}>More Info</Link>
    </>
  );
}
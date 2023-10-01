import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  slug,
  imageSource,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <li key={slug}>
      <h2>{title}</h2>
      <Image src={imageSource} alt="img_title" height={144} width={144}></Image>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <Link href="/art-pieces">
        <button>Go Back</button>
      </Link>
    </li>
  );
}

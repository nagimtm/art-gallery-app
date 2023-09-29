import Image from "next/image";
export default function ArtPiecesPreview({ piece }) {
  const { imageSource, name, artist } = piece;
  //   console.log(piece);
  return (
    <li>
      <h1>{name}</h1>
      <Image src={imageSource} alt="img_title" height={144} width={144}></Image>
      <p>{artist}</p>
    </li>
  );
}

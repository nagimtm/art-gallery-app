import Image from "next/image";
export default function ArtPiecesPreview({ piece }) {
  const { imageSource, name, artist } = piece;

  return (
    <>
      <h2>{name}</h2>
      <Image src={imageSource} alt="img_title" height={144} width={144}></Image>
      <p>{artist}</p>
    </>
  );
}

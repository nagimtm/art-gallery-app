import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;
const Caption = styled.figcaption`
  positon: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: teal;
  color: white;
  padding: 0.5rem 0.3rem;
  text-align: center;
  text-decoration: space;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export default function ArtPiecesPreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  const { imageSource, name, artist, slug } = piece;

  return (
    <Figure>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledImage
          src={imageSource}
          fill
          alt="img_title"
          size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></StyledImage>
      </ImageContainer>
      <Caption id={`caption-${slug}`}>{`${artist}: ${name}`}</Caption>
      <Link href={`art-pieces/${slug}`}>More Info</Link>
    </Figure>
  );
}

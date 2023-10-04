import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 20rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  // position: absolute;
`;

const BackButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 2px solid teal;
  color: teal;
  font-size: 1.5rem;
  border-radius: 25px;
  place-items: center;
  height: 45px;
`;
const Caption = styled.figcaption`
  positon: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  background-color: teal;
  color: white;
  padding: 0.5rem 0.3rem;
  text-align: center;
  text-decoration: space;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export default function ArtPieceDetails({
  artDetailViewer,
  isFavorite,
  onToggleFavorite,
  storeCommentedArtPiece,
  artPieceComments,
  onBack,
}) {
  const { colors } = { ...artDetailViewer };
  return (
    <Section>
      <Link href="/art-pieces">
        <BackButton type="button" onClick={onBack}>
          ← Go Back
        </BackButton>
      </Link>
      <h2>{artDetailViewer?.name}</h2>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(artDetailViewer?.slug)}
        />
        <StyledImage
          src={artDetailViewer?.imageSource}
          alt="img_title"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        ></StyledImage>
      </ImageContainer>

      <Caption>
        <List>
          <li>{artDetailViewer?.artist}</li>
          <li>{artDetailViewer?.year}</li>
          <li>{artDetailViewer?.genre}</li>
        </List>
      </Caption>
      <List>
        {colors?.map((color, index) => (
          <li
            key={index}
            style={{
              backgroundColor: `${color}`,
              width: 20,
              height: 20,
              borderRadius: 30,
            }}
          ></li>
        ))}
      </List>
      {artPieceComments && <Comments artPieceComments={artPieceComments} />}
      <CommentForm
        storeCommentedArtPiece={storeCommentedArtPiece}
        slug={artDetailViewer?.slug}
      />
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 15rem;
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
  margin-top: 15px;
  background-color: white;
  text-decoration: none;
  border: 2px solid black;
  color: black;
  font-size: 2rem;
  border-radius: 50px;
  display: grid;
  place-items: center;
  widht: 5px;
  height: 5px;
  padding: 0 0 0 0.1rem;
`;
const Caption = styled.figcaption`
  positon: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
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
  return (
    <Wrapper>
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

      {/* <List role="list">
        {color.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </List> */}
      <Caption>
        <List>
          <li>{artDetailViewer?.artist}</li>
          <li>{artDetailViewer?.year}</li>
          <li>{artDetailViewer?.genre}</li>
        </List>
      </Caption>
      {/* <li key={artDetailViewer?.slug}></li> */}
      {artPieceComments && <Comments artPieceComments={artPieceComments} />}
      <CommentForm
        storeCommentedArtPiece={storeCommentedArtPiece}
        slug={artDetailViewer?.slug}
      />
      <Link href="/art-pieces">
        <BackButton type="button" onClick={onBack}>
          ← Go Back
        </BackButton>
      </Link>
    </Wrapper>
  );
}

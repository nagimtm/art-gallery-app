import { styled } from "styled-components";
import Image from "next/image";

const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.7rem;
  z-index: 1;
  background-color: ${(props) => (props.isFavorite ? "#f70d1a" : "white")};
  border: 1px solid white;
  border-radius: 30%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image
        src="../../resources/assets/heart.svg"
        width={40}
        height={40}
        alt="fav_art"
      />
    </Button>
  );
}

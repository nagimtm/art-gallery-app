import { styled } from "styled-components";
import Image from "next/image";

const Button = styled.button``;
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button onClick={onToggleFavorite}>
      <Image
        src="../../resources/assets/heart.svg"
        width={20}
        height={20}
        alt="fav_art"
        isFavorite={isFavorite ? "color: red" : "color:black"}
      />
      {/* {isFavorite ? "Make it favorite" : "Remove from favorite list"} */}
    </Button>
  );
}

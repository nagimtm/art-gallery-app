import { styled } from "styled-components";
import Image from "next/image";

const Button = styled.button``;
export default function FavoriteButton({
  slug,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <Button onClick={() => handleToggleFavorite(slug)} slug={slug}>
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

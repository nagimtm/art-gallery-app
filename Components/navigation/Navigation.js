import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/art-pieces"> ArtPieces </Link>
      </li>

      <li>
        <Link href="/"> Spotlight </Link>
      </li>
    </ul>
  );
}

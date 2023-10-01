import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li>
        <Link href="/"> Spotlight </Link>
      </li>
    </nav>
  );
}

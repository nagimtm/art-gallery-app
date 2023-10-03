import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavLink = styled(Link)`
  text-docoration: none;
  padding: 0 0.3rem;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-botton: 5px dotted var(--primary-color);
  }
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  gap: 0.8rem;
  height: 100%;
  margin-bottom: 80px;
  align-items: center;
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <List>
        <li>
          <NavLink href="/" $isActive={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/art-pieces"
            $isActive={router.pathname === "/art-pieces"}
          >
            Art Pieces
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/favorites"
            $isActive={router.pathname === "/favorites"}
          >
            Favorites
          </NavLink>
        </li>
      </List>
    </nav>
  );
}

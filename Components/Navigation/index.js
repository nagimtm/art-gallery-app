import Link from "next/link";
import styled from "styled-components";

const NavLink = styled(Link)`
  text-docoration: none;
  padding: 0 0.3rem;
  // background-color:
  color: black;
  font-weight: bold;
  &:hover {
    color: red;
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
  // const router = useRouter();
  return (
    <nav>
      <List>
        <li>
          <NavLink
            href="/"
            activeStyle={{
              color: "black",
            }}
          >
            Spotlight{" "}
          </NavLink>
        </li>
        <li>
          <NavLink href="/art-pieces" activeClassName="selected">
            Art Pieces
          </NavLink>
        </li>
        <li>
          <NavLink href="/favorites" activeClassName="selected">
            Favorites
          </NavLink>
        </li>
      </List>
    </nav>
  );
}

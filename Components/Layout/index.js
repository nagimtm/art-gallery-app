import Navigation from "../Navigation/index.js";
import styled from "styled-components";

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-row: 5rem auto, 4rem;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Headline> Art Gallery</Headline>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}

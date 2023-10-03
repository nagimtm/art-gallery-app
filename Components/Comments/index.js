import styled from "styled-components";

const Wrapper = styled.section`
  width: 60%;
`;

const Title = styled.h3`
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

export default function Comments({ artPieceComments }) {
  return (
    <Wrapper>
      <Title>Comments</Title>
      <List role="list">
        {artPieceComments.map((comment, index) => (
          <li key={index}>
            <p>
              <p>{comment}</p>
            </p>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

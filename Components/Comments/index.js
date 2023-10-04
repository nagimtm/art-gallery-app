import styled from "styled-components";

const Section = styled.section`
  width: 60%;
`;

const Title = styled.h3`
  margin-left: 45%;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding-left: 0;
`;

export default function Comments({ artPieceComments }) {
  return (
    <Section>
      <Title>Comments</Title>
      <List role="list">
        {artPieceComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </List>
    </Section>
  );
}

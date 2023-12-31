import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 20%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  padding: 0.2rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: teal;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
`;

export default function CommentForm({ storeCommentedArtPiece, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    storeCommentedArtPiece(slug, comment.value);
    event.target.reset();
  }
  return (
    <Form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <Label htmlFor="comment">Add comment:</Label>
      <Textarea type="text" id="comment" name="comment" rows="2" required />
      <Button type="submit">Send</Button>
    </Form>
  );
}

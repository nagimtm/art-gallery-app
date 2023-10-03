export default function CommentForm({ storeCommentedArtPiece, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    storeCommentedArtPiece(slug, comment.value);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="comment" name="comment" required />
      <label htmlFor="comment">Add Comment:</label>
      <button type="submit">Submit</button>
    </form>
  );
}

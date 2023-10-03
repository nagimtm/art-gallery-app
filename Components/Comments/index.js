export default function Comments({ artPieceComments }) {
  return (
    <>
      {artPieceComments.map((comment, index) => (
        <li key={index}>
          <p>{comment}</p>
        </li>
      ))}
    </>
  );
}

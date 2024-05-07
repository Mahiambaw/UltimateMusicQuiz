// eslint-disable-next-line react/prop-types
function ShowQuestion({ question, sample }) {
  return (
    <>
      <h1>{question}</h1>
      <audio controls>
        <source src={sample} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
export default ShowQuestion;

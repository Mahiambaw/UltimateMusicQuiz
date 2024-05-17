// eslint-disable-next-line react/prop-types
import Options from "../Options/Options";
import Questions from "../Questions/Questions";

function ShowQuestion({ question, dispatch, answer }) {
  return (
    <>
      <section className="bg-amber-800">
        <div>
          <div>
            <h1 className="text-emerald-300">{question.question.question}</h1>
            <audio controls>
              <source src={question.question.sample} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div>
            <Options
              options={question.options}
              dispatch={dispatch}
              answer={answer}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default ShowQuestion;

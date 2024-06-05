// eslint-disable-next-line react/prop-types
import Options from "../Options/Options";
import Questions from "../Questions/Questions";
import ShowDots from "../ShowDots/ShowDots";

function ShowQuestion({ question, dispatch, answer, dotIndex, isCorrect }) {
  return (
    <>
      <section className="my-[100px]">
        <div>
          <div className="mb-[120px]">
            <h1 className="text-red-500  text-[36px] md:text-[46px] pb-[100px] text-center">
              {question.question.question}
            </h1>
            <div className="flex  item-center justify-center ">
              <audio controls>
                <source src={question.question.sample} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div>
            <ShowDots
              options={question.options}
              dispatch={dispatch}
              dotIndex={dotIndex}
            />
            <Options
              options={question.options}
              dispatch={dispatch}
              answer={answer}
              dotIndex={dotIndex}
              isCorrect={isCorrect}
              correctAnswer={question.answer}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default ShowQuestion;

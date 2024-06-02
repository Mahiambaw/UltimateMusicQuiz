import { useEffect, useReducer } from "react";
import jsonData from "../../../data/questions.json";
import { fetchData } from "../../util/api";
import ShowQuestion from "../ShowQuestion/ShowQuestion";

const intialState = {
  triviaQuestions: [],
  status: "loading",
  index: 0,
  totalPoints: 0,
  answer: null,
  tallyAnswer: {
    correct: 0,
    correctquestions: [],
    wrongQuestions: [],
    wrongAnswer: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        triviaQuestions: action.payload,
        status: "updated",
      };
    case "updatePoint":
      return {
        ...state,
        totalPoints: state.totalPoints + action.payload,
      };
    case "selectedAnswer":
      const currentQuestion = state.triviaQuestions[state.index];
      const isCorrect = currentQuestion.answer === action.payload;
      return {
        ...state,
        answer: action.payload,
        totalPoints: isCorrect
          ? state.totalPoints + currentQuestion.points
          : state.totalPoints,
        tallyAnswer: {
          ...state.tallyAnswer,
          correct: isCorrect
            ? state.tallyAnswer.correct + 1
            : state.tallyAnswer.correct,
          correctquestions: isCorrect
            ? [...state.tallyAnswer.correctquestions, state.index]
            : state.tallyAnswer.correctquestions,
          wrongAnswer: !isCorrect
            ? state.tallyAnswer.wrongAnswer
            : state.tallyAnswer.wrongAnswer + 1,
        },
      };
  }
}
function Questions() {
  const [{ triviaQuestions, status, index, answer }, dispatch] = useReducer(
    reducer,
    intialState
  );

  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      try {
        const questionsData = [];
        let id = 0;
        for (const question of jsonData.questions) {
          const trackData = await fetchData("", question.smaple.song);

          const optionsData = [];
          for (const option of question.options) {
            const songData = await fetchData(option, "");
            optionsData.push({
              artist: songData.artist,
              image: songData.image,
            });
          }
          questionsData.push({
            id: ++id,
            question: {
              sample: trackData.preview,
              question: question.question,
            },
            options: optionsData,
            answer: question.answer,
            points: question.points,
          });
        }

        dispatch({ type: "dataReceived", payload: questionsData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAndDispatch();
  }, []);

  return (
    <>
      {status === "updated" && (
        <>
          <ShowQuestion
            question={triviaQuestions[index]}
            dispatch={dispatch}
            status={status}
            answer={answer}
          />
        </>
      )}
    </>
  );
}

export default Questions;

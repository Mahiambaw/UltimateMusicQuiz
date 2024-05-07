import { useEffect, useReducer } from "react";
import jsonData from "../../../data/questions.json";
import { fetchData } from "../../util/api";
import ShowQuestion from "../ShowQuestion/ShowQuestion";
import Options from "../Options/Options";

const intialState = {
  triviaQuestions: [],
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        triviaQuestions: action.payload,
        status: "updated",
      };
  }
}

function Questions() {
  const [{ triviaQuestions, status, index }, dispatch] = useReducer(
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
            question={triviaQuestions[index].question.question}
            sample={triviaQuestions[index].question.sample}
            dispatch={dispatch}
            status={status}
          />
          <Options options={triviaQuestions[index].options} />
        </>
      )}
    </>
  );
}

export default Questions;

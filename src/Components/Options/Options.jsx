import ResultButtons from "../ResultButtons/ResultButtons";

function Options({
  options,
  dispatch,
  answer,
  dotIndex,
  isCorrect,
  correctAnswer,
}) {
  console.log(correctAnswer);
  const handleClcik = (index) => {
    dispatch({
      type: "slectedAnswer",
      payload: index,
    });
  };

  return (
    <>
      <section className="flex gap-10 flex-col item-center justify-center md:flex-row  ">
        {options.map((option, index) => (
          <div
            className={`${dotIndex === index ? "block" : "hidden"} ${
              answer !== null
                ? "cursor-not-allowed pointer-events-none opacity-50"
                : "cursor-pointer"
            }`}
            key={option.artist}
            onClick={() => handleClcik(index)}
          >
            <div
              className={`border border-white rounded-md w-[300px] h-[300px] overflow-hidden m-[10px] md:w-[500px] md:h-[400px] ${
                correctAnswer === index && answer !== null && "border-green-600"
              } ${
                answer !== null &&
                correctAnswer !== index &&
                "border-purple-600"
              }`}
            >
              <img
                className="w-full h-full object-cover object-center transform  transition-transform hover:scale-110"
                src={option.image.url}
                alt={option.artist}
              />
            </div>
            <div className="mb-[30px]">
              <p className="text-white text-[25px] leading-6 tracking-wide mb-[60px]">
                {option.artist}
              </p>
            </div>

            <ResultButtons
              isCorrect={isCorrect}
              answer={answer}
              correctAnswer={correctAnswer}
              index={index}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default Options;

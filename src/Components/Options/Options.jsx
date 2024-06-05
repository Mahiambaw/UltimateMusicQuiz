function Options({ options, dispatch, answer, dotIndex, isCorrect }) {
  let newAnswer = null;
  const handleClcik = (index) => {
    dispatch({
      type: "slectedAnswer",
      payload: index,
    });
  };

  return (
    <>
      <section className="flex gap-10 flex-col item-center justify-center md:flex-row mb-[60px] ">
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
                isCorrect !== null &&
                isCorrect &&
                answer !== null &&
                index === answer &&
                "border-green-600"
              } ${
                index === answer &&
                answer !== null &&
                !isCorrect &&
                "border-purple-600"
              }`}
            >
              <img
                className="w-full h-full object-cover object-center transform  transition-transform hover:scale-110"
                src={option.image.url}
                alt={option.artist}
              />
            </div>
            <p className="text-white text-[25px] leading-6 tracking-wide mt-[20px]">
              {option.artist}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Options;

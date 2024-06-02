function Options({ options, dispatch, answer, point, dotIndex }) {
  console.log(answer, point);

  const handleClcik = (index) => {
    dispatch({
      type: "slectedAnswer",
      payload: index,
    });
  };

  return (
    <>
      <section className="flex gap-10 flex-col item-center justify-center md:flex-row ">
        {options.map((option, index) => (
          <div
            className={`${dotIndex === index ? "block" : "hidden"}`}
            key={option.artist}
            onClick={() => handleClcik(index)}
          >
            <div className="border border-white rounded-md w-[300px] h-[300px]  overflow-hidden m-[10px] md :w-[500px] md:h-[400px]">
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

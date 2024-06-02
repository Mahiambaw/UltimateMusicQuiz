function ShowDots({ options, dispatch, dotIndex }) {
  console.log(dotIndex);
  const handleClick = (activeIndex) => {
    console.log(activeIndex, dotIndex);
    dispatch({
      type: "selectedDot",
      payload: activeIndex,
    });
  };
  return (
    <div className="flex gap-12 item-center justify-center">
      {options.map((option, activeIndex) => (
        <button
          className={`mb-[20px] w-3 h-3  rounded-full ${
            dotIndex === activeIndex ? "bg-white" : "bg-red-500"
          }`}
          key={option.artist}
          onClick={() => {
            handleClick(activeIndex);
          }}
        ></button>
      ))}
    </div>
  );
}

export default ShowDots;

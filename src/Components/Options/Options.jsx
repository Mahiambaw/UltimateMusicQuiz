function Options({ options, dispatch, answer, point }) {
  console.log(answer, point);

  const handleClcik = (index) => {
    dispatch({
      type: "selectedAnswer",
      payload: index,
    });
  };

  return (
    <>
      <section>
        {options.map((option, index) => (
          <div key={option.artist} onClick={() => handleClcik(index)}>
            <img src={option.image.url} alt={option.artist} />
            <p>{option.artist}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Options;

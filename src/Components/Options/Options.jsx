function Options({ options }) {
  console.log(options);
  return (
    <>
      <section>
        {options.map((option) => (
          <div key={option.artist}>
            <img src={option.image.url} alt={option.artist} />
            <p>{option.artist}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Options;

import React from "react";

function NextButton({ dispatch }) {
  const handleClick = () => {
    dispatch({ type: "nextQuestion" });
  };
  return (
    <>
      <button className="rounded-md mt-4" onClick={handleClick}>
        Next
      </button>
    </>
  );
}

export default NextButton;

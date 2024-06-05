import { CheckIcon, XIcon } from "lucide-react";
function ResultButtons({ isCorrect, answer }) {
  console.log(answer);
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        {isCorrect !== null && isCorrect && answer !== null && (
          <div className="w-[50px] h-[50px] border-[2px] border-green-400 rounded-full bg-green-600 shadow-[0px 20px 50px 0 rgba(0, 128, 0, 0.75)]">
            <CheckIcon className="w-full h-full text-white" />
          </div>
        )}

        {!isCorrect && answer !== null && (
          <div className="w-[50px] h-[50px] border-[2px] border-purple-400 rounded-full bg-purple-600 shadow-[20px 20px 50px 0 rgba(128, 0, 128, 1)]">
            <XIcon className="w-full h-full text-white" />
          </div>
        )}
      </div>
    </>
  );
}

export default ResultButtons;

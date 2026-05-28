import { useState } from "react";
import { generate } from "random-words";

const GuessWordIndex = () => {
  const [word, setWord] = useState<string>("");
  const [allword, setAllWord] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectWord, setSelectWord] = useState<string>("");

  function shuffelString(temp: string) {
    let char = temp.split("");

    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [char[i], char[j]] = [char[j], char[i]];
    }

    return char.join("");
  }

  function startGenerate() {
    setSelectWord("");

    const temp = generate() as string;

    if (temp.length < 2) {
      return startGenerate();
    }
    setWord(temp);

    const tempArray = [temp, shuffelString(temp), shuffelString(temp)];

    for (let i = tempArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }

    if (tempArray[0] === tempArray[1] && tempArray[1] === tempArray[2]) {
      return startGenerate();
    }

    setIsClicked(true);
    setAllWord(tempArray);
  }

  function checkCorrect(value: string) {
    setSelectWord(value);
    setIsClicked(false);
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-8 p-10">
      <div className="flex flex-wrap gap-2.5 justify-center">
        {allword.map((value, index) => {
          if (selectWord && selectWord !== value) return null;
          const isCorrect = value === word;

          return (
            <button
              key={index}
              onClick={() => checkCorrect(value)}
              className={`
            px-5 py-2.5 rounded-xl border-[1.5px] font-medium text-sm
            transition-all duration-150 outline-none
            ${
              selectWord
                ? isCorrect
                  ? "bg-emerald-100 border-emerald-400 text-emerald-800"
                  : "bg-red-100 border-red-400 text-red-800"
                : "bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 active:scale-95"
            }
          `}
            >
              {value}
            </button>
          );
        })}
      </div>

      <button
        onClick={startGenerate}
        disabled={isClicked}
        className="inline-flex items-center justify-center will-change-transform active:scale-95 cursor-pointer rounded-lg p-2 text-xl font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary/20 h-8 gap-1.5 px-10 shadow-[inset_-1px_-1px_2px_1px_rgba(0,0,0,0.1),inset_1px_1px_2px_1px_rgba(255,255,255,0.5),0px_0px_4px_2px_rgba(0,0,0,0.1)]"
      >
        Start
      </button>
    </div>
  );
};

export default GuessWordIndex;

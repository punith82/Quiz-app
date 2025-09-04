import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is accepted by a finite automaton?",
    options: [
      "Regular languages",
      "Context-free languages",
      "Context-sensitive languages",
      "Recursive languages",
    ],
    correctAnswer: "Regular languages",
  },
  {
    question: "The language {aⁿbⁿ | n ≥ 0} is:",
    options: [
      "Regular",
      "Context-free",
      "Context-sensitive",
      "Recursive enumerable",
    ],
    correctAnswer: "Context-free",
  },
  {
    question: "Which automaton can recognize context-free languages?",
    options: [
      "Finite automaton",
      "Pushdown automaton",
      "Linear bounded automaton",
      "Turing machine",
    ],
    correctAnswer: "Pushdown automaton",
  },
  {
    question:
      "Which of the following is the most powerful computational model?",
    options: [
      "Finite automaton",
      "Pushdown automaton",
      "Turing machine",
      "Regular grammar",
    ],
    correctAnswer: "Turing machine",
  },
  {
    question: "Regular expressions correspond to which type of grammar?",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"],
    correctAnswer: "Type 3",
  },
  {
    question: "Chomsky Normal Form (CNF) is used for:",
    options: [
      "Regular grammars",
      "Context-free grammars",
      "Context-sensitive grammars",
      "Unrestricted grammars",
    ],
    correctAnswer: "Context-free grammars",
  },
  {
    question: "Which problem is undecidable?",
    options: [
      "Halting problem",
      "Checking if a string belongs to a regular language",
      "DFA equivalence",
      "NFA to DFA conversion",
    ],
    correctAnswer: "Halting problem",
  },
  {
    question: "Which automaton is required to recognize palindromes?",
    options: [
      "Finite automaton",
      "Pushdown automaton",
      "Linear bounded automaton",
      "Turing machine",
    ],
    correctAnswer: "Pushdown automaton",
  },
  {
    question: "Which of the following is closed under union?",
    options: [
      "Regular languages",
      "Context-free languages",
      "Recursive languages",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following is NOT closed under intersection?",
    options: [
      "Regular languages",
      "Context-free languages",
      "Recursive languages",
      "Context-sensitive languages",
    ],
    correctAnswer: "Context-free languages",
  },
  {
    question: "A DFA can be converted into:",
    options: ["NFA", "Regular expression", "Grammar", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following languages is non-regular?",
    options: ["{aⁿ | n ≥ 0}", "{aⁿbⁿ | n ≥ 0}", "{aⁿbᵐ | n, m ≥ 0}", "{a, b}*"],
    correctAnswer: "{aⁿbⁿ | n ≥ 0}",
  },
  {
    question: "The pumping lemma is used to prove:",
    options: [
      "A language is regular",
      "A language is not regular",
      "A language is context-free",
      "A language is decidable",
    ],
    correctAnswer: "A language is not regular",
  },
  {
    question:
      "Which machine is required to recognize context-sensitive languages?",
    options: [
      "DFA",
      "Pushdown automaton",
      "Linear bounded automaton",
      "Turing machine",
    ],
    correctAnswer: "Linear bounded automaton",
  },
  {
    question: "Which of the following is true about NP problems?",
    options: [
      "They can be solved in polynomial time",
      "Their solutions can be verified in polynomial time",
      "They cannot be solved at all",
      "They are undecidable",
    ],
    correctAnswer: "Their solutions can be verified in polynomial time",
  },
  {
    question: "The complement of a regular language is:",
    options: [
      "Always regular",
      "Always context-free",
      "Always decidable",
      "Always recursive enumerable",
    ],
    correctAnswer: "Always regular",
  },
  {
    question:
      "Which of the following is equivalent to a Non-deterministic Finite Automaton (NFA)?",
    options: [
      "Deterministic Finite Automaton",
      "Pushdown Automaton",
      "Turing Machine",
      "Linear Bounded Automaton",
    ],
    correctAnswer: "Deterministic Finite Automaton",
  },
  {
    question: "Which of the following problems is decidable?",
    options: [
      "Whether a DFA accepts a string",
      "Whether a Turing machine halts on all inputs",
      "Whether two CFGs generate the same language",
      "Whether a Turing machine halts",
    ],
    correctAnswer: "Whether a DFA accepts a string",
  },
  {
    question:
      "The hierarchy of Chomsky grammars from most restrictive to most general is:",
    options: [
      "Type 3 → Type 2 → Type 1 → Type 0",
      "Type 0 → Type 1 → Type 2 → Type 3",
      "Type 1 → Type 0 → Type 3 → Type 2",
      "Type 2 → Type 3 → Type 1 → Type 0",
    ],
    correctAnswer: "Type 3 → Type 2 → Type 1 → Type 0",
  },
  {
    question: "If a language is regular, then it must be:",
    options: [
      "Accepted by a DFA",
      "Accepted by a PDA",
      "Accepted by a LBA",
      "Accepted by a Turing machine",
    ],
    correctAnswer: "Accepted by a DFA",
  },
];

function TC() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setshowscore] = useState(false);

  function answerselection(e) {
    if (dsaQuestions[index].correctAnswer === e.target.textContent) {
      setScore((p) => p + 1);
    }

    const nextIndex = index + 1;
    if (nextIndex < dsaQuestions.length) {
      setIndex(nextIndex);
    } else {
      setshowscore(true);
    }
  }
  function previous_btn() {
    setIndex(index > 0 ? index - 1 : 0);
  }
  return (
    <div className="mx-10 my-10 p-10  bg-slate-700 rounded-lg text-gray-200">
      <h1 className="text-center mb-7 font-bold text-4xl text-slate-800 dark:text-white">
        Theory of Computation Quiz
      </h1>
      {showscore ? (
        <div className="flex flex-col items-center justify-center text-center font-semibold text-2xl h-96 bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl mb-2">🎉 Quiz Completed!</h2>
          <p className="text-xl text-gray-300">
            Your Score: <span className="text-green-400">{score}</span> /{" "}
            {dsaQuestions.length}
          </p>

          <p
            className={`mt-4 text-lg font-medium ${
              score === dsaQuestions.length
                ? "text-green-400"
                : score >= dsaQuestions.length * 0.7
                ? "text-blue-400"
                : score >= dsaQuestions.length * 0.4
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {score === dsaQuestions.length
              ? "🔥 Perfect Score! You're a DSA Master!"
              : score >= dsaQuestions.length * 0.7
              ? "👏 Great job! You have strong DSA skills."
              : score >= dsaQuestions.length * 0.4
              ? "👍 Not bad! Keep practicing, you’re improving!"
              : "💡 Don’t worry, every master was once a beginner. Keep going!"}
          </p>

          <button
            className="border-2 border-slate-500 px-5 py-2 rounded-lg 
                 hover:bg-slate-600 transition mt-6 text-base font-normal"
            onClick={() => {
              setIndex(0);
              setScore(0);
              setshowscore(false);
            }}
          >
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-5 h-20">
            {index + 1}. {dsaQuestions[index].question}
          </h2>
          <ul className="flex flex-col gap-3 mb-5 ">
            {dsaQuestions[index].options.map((option) => (
              <li
                onClick={answerselection}
                key={option}
                className="bg-slate-500 p-3 rounded-md hover:bg-slate-600 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              onClick={() => previous_btn()}
              className="border-2 p-2 rounded-md hover:bg-slate-600"
            >
              ⏪ Previous
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TC;

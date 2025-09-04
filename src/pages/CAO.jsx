import React, { useState } from "react";

const dsaQuestions = [
  {
    question:
      "Which architecture uses separate buses for data and instructions?",
    options: ["Von Neumann", "Harvard", "RISC", "CISC"],
    correctAnswer: "Harvard",
  },
  {
    question: "What does the Program Counter (PC) hold?",
    options: [
      "Current instruction",
      "Next instruction address",
      "Operand",
      "Memory data",
    ],
    correctAnswer: "Next instruction address",
  },
  {
    question:
      "Which of the following is NOT a type of instruction pipeline hazard?",
    options: ["Structural", "Data", "Control", "Virtual"],
    correctAnswer: "Virtual",
  },
  {
    question: "The ALU is a part of which CPU component?",
    options: ["Control Unit", "I/O Unit", "Processing Unit", "Memory"],
    correctAnswer: "Processing Unit",
  },
  {
    question: "Which memory is the fastest?",
    options: ["Cache", "RAM", "Hard Disk", "Virtual Memory"],
    correctAnswer: "Cache",
  },
  {
    question:
      "In Von Neumann architecture, both instructions and data share the:",
    options: ["Registers", "Memory unit", "Control signals", "Accumulator"],
    correctAnswer: "Memory unit",
  },
  {
    question: "Which register holds the instruction currently being executed?",
    options: ["Accumulator", "MAR", "IR", "PC"],
    correctAnswer: "IR",
  },
  {
    question: "Which type of mapping is used in cache memory?",
    options: [
      "Direct mapping",
      "Associative mapping",
      "Set-associative mapping",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    question: "The main function of the Control Unit is:",
    options: [
      "Performing arithmetic",
      "Decoding instructions",
      "Data storage",
      "Error detection",
    ],
    correctAnswer: "Decoding instructions",
  },
  {
    question: "A stack is usually implemented as:",
    options: ["FIFO", "LIFO", "Circular Queue", "Linked List only"],
    correctAnswer: "LIFO",
  },
  {
    question: "Which of the following is NOT a RISC characteristic?",
    options: [
      "Simple instructions",
      "One instruction per cycle",
      "Large instruction set",
      "Many registers",
    ],
    correctAnswer: "Large instruction set",
  },
  {
    question: "The hit ratio of cache is:",
    options: [
      "Hits/Total accesses",
      "Misses/Hits",
      "Hits/Misses",
      "Misses/Total accesses",
    ],
    correctAnswer: "Hits/Total accesses",
  },
  {
    question: "The MAR (Memory Address Register) stores:",
    options: [
      "Instruction opcode",
      "Operand data",
      "Address of data/instruction",
      "Next PC value",
    ],
    correctAnswer: "Address of data/instruction",
  },
  {
    question: "Which bus carries actual data between CPU, memory, and I/O?",
    options: ["Control bus", "Address bus", "Data bus", "System bus"],
    correctAnswer: "Data bus",
  },
  {
    question: "The CPI (Cycles Per Instruction) is used to measure:",
    options: ["Instruction size", "Execution time", "Throughput", "Latency"],
    correctAnswer: "Execution time",
  },
  {
    question: "Which type of hazard occurs due to instruction dependencies?",
    options: [
      "Data hazard",
      "Control hazard",
      "Structural hazard",
      "Cache hazard",
    ],
    correctAnswer: "Data hazard",
  },
  {
    question: "Which register is used to store intermediate results in CPU?",
    options: ["Accumulator", "PC", "IR", "MAR"],
    correctAnswer: "Accumulator",
  },
  {
    question:
      "The process of executing multiple instructions simultaneously is:",
    options: [
      "Serial processing",
      "Parallelism",
      "Interrupt handling",
      "Virtualization",
    ],
    correctAnswer: "Parallelism",
  },
  {
    question: "Which memory is non-volatile?",
    options: ["Cache", "RAM", "ROM", "Registers"],
    correctAnswer: "ROM",
  },
  {
    question: "CISC architecture focuses on:",
    options: [
      "Few instructions",
      "Complex instructions",
      "One instruction per cycle",
      "Pipeline simplicity",
    ],
    correctAnswer: "Complex instructions",
  },
];

function CAO() {
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
        Computer Architecture and Organization Quiz
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
export default CAO;

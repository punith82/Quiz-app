import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is NOT an operating system?",
    options: ["Windows", "Linux", "Oracle", "macOS"],
    correctAnswer: "Oracle",
  },
  {
    question: "What is the main function of an operating system?",
    options: [
      "Perform arithmetic operations",
      "Manage computer hardware and software resources",
      "Translate programming languages",
      "Provide internet connectivity",
    ],
    correctAnswer: "Manage computer hardware and software resources",
  },
  {
    question: "Which of the following is a type of real-time operating system?",
    options: ["Windows 10", "MS-DOS", "VxWorks", "Linux Mint"],
    correctAnswer: "VxWorks",
  },
  {
    question: "In multiprogramming systems, the CPU is:",
    options: [
      "Always idle",
      "Used to execute multiple jobs simultaneously",
      "Never idle",
      "Used only for batch processing",
    ],
    correctAnswer: "Never idle",
  },
  {
    question: "Which scheduling algorithm may cause starvation?",
    options: [
      "First-Come, First-Served",
      "Shortest Job Next",
      "Round Robin",
      "Priority Scheduling",
    ],
    correctAnswer: "Priority Scheduling",
  },
  {
    question: "What is thrashing in operating systems?",
    options: [
      "Excessive swapping between RAM and disk",
      "CPU overheating",
      "Corruption of process table",
      "Fragmentation of memory",
    ],
    correctAnswer: "Excessive swapping between RAM and disk",
  },
  {
    question:
      "Which of the following is NOT a valid page replacement algorithm?",
    options: ["FIFO", "LRU", "Optimal", "Binary Search"],
    correctAnswer: "Binary Search",
  },
  {
    question: "Deadlock occurs when:",
    options: [
      "Processes are running infinitely",
      "Two or more processes are waiting indefinitely for resources",
      "Memory is full",
      "Processor overheats",
    ],
    correctAnswer:
      "Two or more processes are waiting indefinitely for resources",
  },
  {
    question: "Which of the following is used to solve deadlocks?",
    options: [
      "Banker’s Algorithm",
      "DFS Algorithm",
      "Binary Search",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Banker’s Algorithm",
  },
  {
    question: "In Round Robin scheduling, the time quantum is:",
    options: ["Fixed", "Variable", "Random", "None of these"],
    correctAnswer: "Fixed",
  },
  {
    question: "What is the role of the kernel in an operating system?",
    options: [
      "Provides a user interface",
      "Acts as a compiler",
      "Manages system resources and hardware",
      "Performs data encryption",
    ],
    correctAnswer: "Manages system resources and hardware",
  },
  {
    question:
      "Which memory management technique allows non-contiguous memory allocation?",
    options: [
      "Paging",
      "Contiguous allocation",
      "Fixed partitioning",
      "Single partitioning",
    ],
    correctAnswer: "Paging",
  },
  {
    question: "Which of the following is an example of spooling?",
    options: ["Keyboard input", "Mouse click", "Print queue", "Cache memory"],
    correctAnswer: "Print queue",
  },
  {
    question: "A process in the ‘Ready’ state means:",
    options: [
      "It is using the CPU",
      "It is waiting for I/O",
      "It is ready to be assigned to the CPU",
      "It has terminated",
    ],
    correctAnswer: "It is ready to be assigned to the CPU",
  },
  {
    question: "Which of these is NOT a type of operating system?",
    options: ["Batch OS", "Time-sharing OS", "Distributed OS", "Compiler OS"],
    correctAnswer: "Compiler OS",
  },
  {
    question:
      "In which scheduling algorithm does the process with the shortest burst time get executed first?",
    options: ["FCFS", "SJF", "Round Robin", "Priority"],
    correctAnswer: "SJF",
  },
  {
    question: "Fragmentation in memory occurs when:",
    options: [
      "Processes are swapped out",
      "Processes are killed",
      "Free memory is broken into small non-contiguous blocks",
      "A process requests more memory than available",
    ],
    correctAnswer: "Free memory is broken into small non-contiguous blocks",
  },
  {
    question:
      "Which system call is used to create a new process in Unix/Linux?",
    options: ["exec()", "fork()", "create()", "spawn()"],
    correctAnswer: "fork()",
  },
  {
    question:
      "What is the maximum number of processes that can be in deadlock?",
    options: ["One", "Two", "All processes in the system", "None"],
    correctAnswer: "All processes in the system",
  },
  {
    question:
      "Which operating system uses the concept of ‘segments’ for memory management?",
    options: ["Windows", "Unix", "MS-DOS", "Multics"],
    correctAnswer: "Multics",
  },
];

function OS() {
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
        Operating Systems Quiz
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
export default OS;

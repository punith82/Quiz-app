import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is NOT a software process model?",
    options: ["Waterfall", "Spiral", "Agile", "Compiler"],
    correctAnswer: "Compiler",
  },
  {
    question: "In the Waterfall model, testing is done:",
    options: [
      "After coding",
      "Before coding",
      "During requirement gathering",
      "Parallel to coding",
    ],
    correctAnswer: "After coding",
  },
  {
    question: "Which of the following is NOT a functional requirement?",
    options: [
      "User authentication",
      "Report generation",
      "System reliability",
      "Payment processing",
    ],
    correctAnswer: "System reliability",
  },
  {
    question: "What does SRS stand for in software engineering?",
    options: [
      "Software Requirement Specification",
      "System Resource Setup",
      "Software Reliability Study",
      "System Requirement Sheet",
    ],
    correctAnswer: "Software Requirement Specification",
  },
  {
    question: "Which of the following is NOT a part of the Agile Manifesto?",
    options: [
      "Individuals and interactions over processes and tools",
      "Working software over comprehensive documentation",
      "Customer collaboration over contract negotiation",
      "Following a strict plan over responding to change",
    ],
    correctAnswer: "Following a strict plan over responding to change",
  },
  {
    question: "In software testing, a white-box test focuses on:",
    options: [
      "Functionality",
      "Internal logic",
      "User requirements",
      "System reliability",
    ],
    correctAnswer: "Internal logic",
  },
  {
    question: "Which model is also known as the 'build-and-fix' model?",
    options: ["Prototype", "Incremental", "Evolutionary", "Ad-hoc"],
    correctAnswer: "Ad-hoc",
  },
  {
    question: "Which of the following is a CASE tool?",
    options: ["Compiler", "Debugger", "Project management tool", "Assembler"],
    correctAnswer: "Project management tool",
  },
  {
    question: "Regression testing is performed to:",
    options: [
      "Check new features",
      "Ensure old features still work",
      "Find system bottlenecks",
      "Optimize performance",
    ],
    correctAnswer: "Ensure old features still work",
  },
  {
    question:
      "Which diagram is used in UML to represent object interactions over time?",
    options: [
      "Class diagram",
      "Sequence diagram",
      "Use case diagram",
      "Activity diagram",
    ],
    correctAnswer: "Sequence diagram",
  },
  {
    question: "Cyclomatic complexity is used to measure:",
    options: [
      "Code readability",
      "Number of bugs",
      "Independent paths in code",
      "Execution time",
    ],
    correctAnswer: "Independent paths in code",
  },
  {
    question:
      "Which type of maintenance involves adding new features to software?",
    options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
    correctAnswer: "Perfective",
  },
  {
    question:
      "In risk management, the product of probability and impact is known as:",
    options: [
      "Risk exposure",
      "Risk mitigation",
      "Risk factor",
      "Risk recovery",
    ],
    correctAnswer: "Risk exposure",
  },
  {
    question:
      "Which software process model is best suited for projects with unclear requirements?",
    options: ["Waterfall", "Spiral", "V-model", "Agile"],
    correctAnswer: "Agile",
  },
  {
    question: "Black-box testing focuses on:",
    options: [
      "System internals",
      "Code complexity",
      "Input-output behavior",
      "Memory leaks",
    ],
    correctAnswer: "Input-output behavior",
  },
  {
    question:
      "Which metric measures the degree of interdependence between modules?",
    options: ["Cohesion", "Coupling", "Complexity", "Reliability"],
    correctAnswer: "Coupling",
  },
  {
    question:
      "Which SDLC phase defines how the system will perform its functions?",
    options: ["Requirement analysis", "Design", "Implementation", "Testing"],
    correctAnswer: "Design",
  },
  {
    question:
      "Who is responsible for validating requirements with stakeholders?",
    options: [
      "Tester",
      "Developer",
      "Business Analyst",
      "Database Administrator",
    ],
    correctAnswer: "Business Analyst",
  },
  {
    question: "A Gantt chart is primarily used for:",
    options: [
      "Risk analysis",
      "Project scheduling",
      "System design",
      "Requirement gathering",
    ],
    correctAnswer: "Project scheduling",
  },
  {
    question:
      "Which testing technique uses equivalence partitioning and boundary value analysis?",
    options: [
      "Black-box testing",
      "White-box testing",
      "Unit testing",
      "Performance testing",
    ],
    correctAnswer: "Black-box testing",
  },
];

function SE() {
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
        Software Engineering Quiz
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
export default SE;

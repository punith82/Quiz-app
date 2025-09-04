import React, { useState } from "react";

const dsaQuestions = [
  {
    question:
      "Which of the following is considered the father of Artificial Intelligence?",
    options: ["Alan Turing", "John McCarthy", "Herbert Simon", "Marvin Minsky"],
    correctAnswer: "John McCarthy",
  },
  {
    question:
      "Which search strategy explores all nodes at the present depth before moving on to the nodes at the next depth level?",
    options: [
      "Depth-First Search",
      "Breadth-First Search",
      "Best-First Search",
      "Hill Climbing",
    ],
    correctAnswer: "Breadth-First Search",
  },
  {
    question:
      "Which of the following is a characteristic of heuristic functions?",
    options: [
      "They guarantee optimality",
      "They estimate the cost to reach the goal",
      "They are exact solutions",
      "They remove search space",
    ],
    correctAnswer: "They estimate the cost to reach the goal",
  },
  {
    question: "In machine learning, supervised learning requires:",
    options: [
      "Unlabeled data",
      "Labeled data",
      "No data",
      "Reinforcement signals",
    ],
    correctAnswer: "Labeled data",
  },
  {
    question:
      "Which of the following algorithms is used for decision tree learning?",
    options: ["K-means", "ID3", "Perceptron", "Naive Bayes"],
    correctAnswer: "ID3",
  },
  {
    question:
      "Which type of agent learns from past experiences and updates its knowledge?",
    options: [
      "Simple reflex agent",
      "Model-based agent",
      "Learning agent",
      "Goal-based agent",
    ],
    correctAnswer: "Learning agent",
  },
  {
    question: "The Turing Test is used to determine:",
    options: [
      "Optimal algorithms",
      "Human-like intelligence",
      "Complexity of a problem",
      "Search efficiency",
    ],
    correctAnswer: "Human-like intelligence",
  },
  {
    question: "Which of the following represents knowledge in AI?",
    options: [
      "Semantic networks",
      "Production rules",
      "Frames",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Which logic is mainly used in AI for knowledge representation?",
    options: [
      "Propositional logic",
      "First-order logic",
      "Temporal logic",
      "Modal logic",
    ],
    correctAnswer: "First-order logic",
  },
  {
    question: "Which algorithm is an example of uninformed search?",
    options: [
      "A* search",
      "Greedy search",
      "Breadth-First Search",
      "Heuristic search",
    ],
    correctAnswer: "Breadth-First Search",
  },
  {
    question: "Which learning technique is used in AlphaGo?",
    options: [
      "Supervised learning",
      "Reinforcement learning",
      "Unsupervised learning",
      "Semi-supervised learning",
    ],
    correctAnswer: "Reinforcement learning",
  },
  {
    question: "In neural networks, backpropagation is used for:",
    options: [
      "Feature selection",
      "Weight adjustment",
      "Input normalization",
      "Activation function",
    ],
    correctAnswer: "Weight adjustment",
  },
  {
    question: "Which of the following is NOT a type of machine learning?",
    options: ["Supervised", "Unsupervised", "Reinforcement", "Iterative"],
    correctAnswer: "Iterative",
  },
  {
    question: "What is the main disadvantage of the Minimax algorithm?",
    options: [
      "It is not optimal",
      "It is too slow for large search trees",
      "It does not use heuristics",
      "It only works for linear problems",
    ],
    correctAnswer: "It is too slow for large search trees",
  },
  {
    question:
      "Which of the following techniques helps reduce the search space in Minimax?",
    options: [
      "Gradient descent",
      "Backpropagation",
      "Alpha-Beta pruning",
      "Reinforcement",
    ],
    correctAnswer: "Alpha-Beta pruning",
  },
  {
    question:
      "Which AI domain deals with understanding and processing human language?",
    options: [
      "Computer vision",
      "Robotics",
      "Natural Language Processing",
      "Expert systems",
    ],
    correctAnswer: "Natural Language Processing",
  },
  {
    question: "Which of the following is an example of unsupervised learning?",
    options: ["Classification", "Clustering", "Regression", "Reinforcement"],
    correctAnswer: "Clustering",
  },
  {
    question: "Which problem-solving approach does A* search use?",
    options: [
      "Greedy + Uniform cost search",
      "Depth-first + Breadth-first",
      "Random search",
      "Backtracking",
    ],
    correctAnswer: "Greedy + Uniform cost search",
  },
  {
    question: "Which type of AI system is designed to perform a narrow task?",
    options: [
      "Artificial General Intelligence (AGI)",
      "Artificial Narrow Intelligence (ANI)",
      "Superintelligence",
      "Heuristic AI",
    ],
    correctAnswer: "Artificial Narrow Intelligence (ANI)",
  },
  {
    question: "Which of the following is true about expert systems?",
    options: [
      "They mimic human experts",
      "They are based on knowledge bases and inference engines",
      "They provide reasoning and explanations",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
];

function AI() {
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
        Artificial Intelligence Quiz
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
export default AI;

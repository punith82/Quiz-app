import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is a tautology?",
    options: ["p ∧ ¬p", "p ∨ ¬p", "p → ¬p", "¬p ∧ ¬p"],
    correctAnswer: "p ∨ ¬p",
  },
  {
    question: "The number of subsets of a set with n elements is:",
    options: ["n", "2n", "n!", "n²"],
    correctAnswer: "2n",
  },
  {
    question:
      "What is the number of edges in a complete graph with n vertices?",
    options: ["n", "n²", "n(n-1)/2", "2n"],
    correctAnswer: "n(n-1)/2",
  },
  {
    question: "Which of the following is an equivalence relation?",
    options: ["Less than (<)", "Divides (|)", "Greater than (>)", "Subset (⊆)"],
    correctAnswer: "Divides (|)",
  },
  {
    question: "In propositional logic, (p → q) is equivalent to:",
    options: ["¬p ∨ q", "p ∨ q", "¬q ∨ p", "p ∧ q"],
    correctAnswer: "¬p ∨ q",
  },
  {
    question: "The degree of a vertex in a graph is:",
    options: [
      "The number of edges incident to it",
      "The number of paths through it",
      "The number of vertices connected to it",
      "The number of loops in the graph",
    ],
    correctAnswer: "The number of edges incident to it",
  },
  {
    question:
      "Which of the following is a valid recurrence relation for binary search?",
    options: [
      "T(n) = T(n-1) + 1",
      "T(n) = T(n/2) + 1",
      "T(n) = 2T(n-1) + 1",
      "T(n) = nT(n-1)",
    ],
    correctAnswer: "T(n) = T(n/2) + 1",
  },
  {
    question: "In set theory, A ∩ B represents:",
    options: [
      "Union of sets",
      "Intersection of sets",
      "Difference of sets",
      "Complement of sets",
    ],
    correctAnswer: "Intersection of sets",
  },
  {
    question: "A graph is Eulerian if:",
    options: [
      "All vertices have even degree",
      "It has a Hamiltonian path",
      "It has no cycles",
      "All vertices have odd degree",
    ],
    correctAnswer: "All vertices have even degree",
  },
  {
    question: "How many relations are possible on a set with n elements?",
    options: ["2^n", "n²", "2^(n²)", "n!"],
    correctAnswer: "2^(n²)",
  },
  {
    question: "Which traversal method is used in Depth-First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Priority Queue"],
    correctAnswer: "Stack",
  },
  {
    question:
      "The number of onto functions from a set of m elements to a set of n elements is given by:",
    options: ["n^m", "nPm", "nCm", "n! * S(m, n)"],
    correctAnswer: "n! * S(m, n)",
  },
  {
    question: "Which logic law is (p ∧ (q ∨ r)) ≡ (p ∧ q) ∨ (p ∧ r)?",
    options: [
      "Associative law",
      "Distributive law",
      "De Morgan’s law",
      "Idempotent law",
    ],
    correctAnswer: "Distributive law",
  },
  {
    question: "A tree with n vertices has how many edges?",
    options: ["n", "n-1", "2n", "n+1"],
    correctAnswer: "n-1",
  },
  {
    question:
      "Which of the following is NOT a property of equivalence relations?",
    options: ["Reflexive", "Symmetric", "Transitive", "Injective"],
    correctAnswer: "Injective",
  },
  {
    question: "The chromatic number of a bipartite graph is:",
    options: ["1", "2", "3", "Depends on edges"],
    correctAnswer: "2",
  },
  {
    question: "If A and B are disjoint sets, then n(A ∪ B) equals:",
    options: ["n(A) + n(B)", "n(A) × n(B)", "n(A) - n(B)", "n(A)"],
    correctAnswer: "n(A) + n(B)",
  },
  {
    question: "Which of the following is NOT a simple graph?",
    options: [
      "Graph with no loops and no multiple edges",
      "Graph with a loop",
      "Graph with no edges",
      "Graph with isolated vertices",
    ],
    correctAnswer: "Graph with a loop",
  },
  {
    question: "The principle of mathematical induction is used to:",
    options: [
      "Prove statements for all natural numbers",
      "Count subsets",
      "Find probability",
      "Measure complexity",
    ],
    correctAnswer: "Prove statements for all natural numbers",
  },
  {
    question: "Which traversal is used in Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Heap", "Array"],
    correctAnswer: "Queue",
  },
];

function DM() {
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
        Discrete Mathematics Quiz
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
export default DM;

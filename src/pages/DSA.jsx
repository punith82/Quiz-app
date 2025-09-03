import React, { useState } from "react";

const dsaQuestions = [
  {
    question:
      "What is the time complexity of searching for an element in a binary search tree in the worst case?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(n)",
  },
  {
    question:
      "Which data structure is best for implementing a breadth-first search (BFS) algorithm?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    correctAnswer: "Queue",
  },
  {
    question: "What is the primary advantage of using a hash table?",
    options: [
      "Fast insertions and deletions",
      "Sorted data storage",
      "Guaranteed constant time lookups",
      "Easy to implement",
    ],
    correctAnswer: "Fast insertions and deletions",
  },
  {
    question: "In a min-heap, where is the smallest element located?",
    options: [
      "Root node",
      "Any leaf node",
      "Anywhere in the tree",
      "The rightmost node",
    ],
    correctAnswer: "Root node",
  },
  {
    question:
      "What is the time complexity of inserting a new element at the beginning of a singly linked list?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
    correctAnswer: "O(1)",
  },
  {
    question:
      "Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    correctAnswer: "Bubble Sort",
  },
  {
    question: "What is a 'graph traversal'?",
    options: [
      "A process to sort the nodes of a graph",
      "Visiting every node and edge of a graph exactly once",
      "A method for finding the shortest path",
      "Converting a graph into a tree",
    ],
    correctAnswer: "Visiting every node and edge of a graph exactly once",
  },
  {
    question: "What does 'LIFO' stand for in the context of data structures?",
    options: [
      "Last-in, first-out",
      "Last-in, fast-out",
      "Largest-in, first-out",
      "Last-item, first-out",
    ],
    correctAnswer: "Last-in, first-out",
  },
  {
    question: "Which of these is NOT a type of tree data structure?",
    options: ["AVL Tree", "B-Tree", "Red-Black Tree", "Hash Tree"],
    correctAnswer: "Hash Tree",
  },
  {
    question: "What is a 'stack overflow' error?",
    options: [
      "When a stack's memory space is exhausted",
      "An attempt to push an element to a full stack",
      "When a pop operation is performed on an empty stack",
      "An attempt to access an invalid index in a stack",
    ],
    correctAnswer: "When a stack's memory space is exhausted",
  },
  {
    question: "What is the main difference between an array and a linked list?",
    options: [
      "Arrays have a fixed size, linked lists are dynamic",
      "Linked lists are faster for random access",
      "Arrays can store different data types",
      "There is no difference",
    ],
    correctAnswer: "Arrays have a fixed size, linked lists are dynamic",
  },
  {
    question: "The worst-case time complexity of a linear search algorithm is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
  },
  {
    question:
      "What is the time complexity of a 'pop' operation on a stack implemented with a linked list?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
  },
  {
    question:
      "Which data structure is used to implement a recursive function call?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: "Stack",
  },
  {
    question: "What is a 'collision' in a hash table?",
    options: [
      "When a new key maps to an occupied bucket",
      "When two hash functions are used",
      "When a hash table runs out of memory",
      "When an element is deleted",
    ],
    correctAnswer: "When a new key maps to an occupied bucket",
  },
  {
    question:
      "Which of the following is an example of a 'divide and conquer' algorithm?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Search"],
    correctAnswer: "Merge Sort",
  },
  {
    question:
      "A full binary tree is a tree in which every node other than the leaves has:",
    options: [
      "Exactly two children",
      "At least one child",
      "At most one child",
      "Zero children",
    ],
    correctAnswer: "Exactly two children",
  },
  {
    question: "What is 'dynamic programming'?",
    options: [
      "An algorithm for sorting data",
      "Breaking down a problem into smaller overlapping subproblems",
      "A method for managing memory",
      "An approach to solve problems using graphs",
    ],
    correctAnswer:
      "Breaking down a problem into smaller overlapping subproblems",
  },
  {
    question: "Which of the following statements about a binary tree is true?",
    options: [
      "Every node has exactly two children",
      "Every node can have at most two children",
      "The left child must be larger than the root",
      "The right child must be smaller than the root",
    ],
    correctAnswer: "Every node can have at most two children",
  },
  {
    question: "What is the purpose of a 'linked list'?",
    options: [
      "To store data in a fixed-size array",
      "To create a series of interconnected nodes",
      "To perform fast random access of data",
      "To sort data efficiently",
    ],
    correctAnswer: "To create a series of interconnected nodes",
  },
];

function DSA() {
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
  return (
    <div className="container">
      {showscore ? (
        <div>
          <h2>Quiz Completed ✅</h2>
          <p>
            Your Score: {score} / {dsaQuestions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="question">
            {index + 1}. {dsaQuestions[index].question}
          </h2>
          <ul>
            {dsaQuestions[index].options.map((option) => (
              <li onClick={answerselection} key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default DSA;

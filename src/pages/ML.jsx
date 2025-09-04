import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is NOT a type of machine learning?",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Recursive learning",
    ],
    correctAnswer: "Recursive learning",
  },
  {
    question: "Which algorithm is commonly used for classification problems?",
    options: ["Linear Regression", "Logistic Regression", "K-means", "PCA"],
    correctAnswer: "Logistic Regression",
  },
  {
    question:
      "Which machine learning technique is used for grouping similar data points?",
    options: [
      "Classification",
      "Clustering",
      "Regression",
      "Dimensionality Reduction",
    ],
    correctAnswer: "Clustering",
  },
  {
    question: "Which of the following is an example of supervised learning?",
    options: ["K-means", "PCA", "Linear Regression", "Apriori"],
    correctAnswer: "Linear Regression",
  },
  {
    question: "Overfitting occurs when:",
    options: [
      "The model performs well on training data but poorly on test data",
      "The model performs well on test data but poorly on training data",
      "The model performs equally on both training and test data",
      "The model is too simple",
    ],
    correctAnswer:
      "The model performs well on training data but poorly on test data",
  },
  {
    question: "Which method helps prevent overfitting?",
    options: [
      "Dropout",
      "Cross-validation",
      "Regularization",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following is a dimensionality reduction technique?",
    options: ["K-means", "PCA", "Naive Bayes", "Logistic Regression"],
    correctAnswer: "PCA",
  },
  {
    question: "In reinforcement learning, the goal of an agent is to:",
    options: [
      "Minimize loss",
      "Maximize cumulative reward",
      "Classify data",
      "Cluster data",
    ],
    correctAnswer: "Maximize cumulative reward",
  },
  {
    question:
      "Which of the following is an activation function in neural networks?",
    options: ["ReLU", "Sigmoid", "Tanh", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Gradient Descent is used for:",
    options: [
      "Maximizing accuracy",
      "Optimizing cost function",
      "Clustering data",
      "Generating features",
    ],
    correctAnswer: "Optimizing cost function",
  },
  {
    question:
      "Which evaluation metric is most suitable for imbalanced datasets?",
    options: [
      "Accuracy",
      "Precision & Recall",
      "Mean Squared Error",
      "R-squared",
    ],
    correctAnswer: "Precision & Recall",
  },
  {
    question:
      "Which algorithm is used for dimensionality reduction before visualization?",
    options: ["KNN", "Decision Tree", "t-SNE", "Naive Bayes"],
    correctAnswer: "t-SNE",
  },
  {
    question:
      "Which ensemble method combines predictions by majority voting or averaging?",
    options: ["Bagging", "Boosting", "Stacking", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which algorithm is commonly used for market basket analysis?",
    options: ["Apriori", "K-means", "SVM", "PCA"],
    correctAnswer: "Apriori",
  },
  {
    question:
      "Which of the following is a loss function used in classification?",
    options: [
      "Mean Squared Error",
      "Cross-Entropy Loss",
      "Hinge Loss",
      "Both B and C",
    ],
    correctAnswer: "Both B and C",
  },
  {
    question:
      "Which machine learning algorithm is based on the concept of maximum margin?",
    options: ["Naive Bayes", "SVM", "Decision Tree", "Random Forest"],
    correctAnswer: "SVM",
  },
  {
    question: "Which method is used to handle missing data?",
    options: [
      "Dropping rows",
      "Mean/Median imputation",
      "Predictive modeling",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following is true about k-Nearest Neighbors (kNN)?",
    options: [
      "It is a lazy learner",
      "It requires no training phase",
      "It depends on distance metrics",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Which deep learning framework is developed by Google?",
    options: ["TensorFlow", "PyTorch", "Theano", "Keras"],
    correctAnswer: "TensorFlow",
  },
  {
    question: "Which of the following best describes bias-variance tradeoff?",
    options: [
      "High bias leads to underfitting, high variance leads to overfitting",
      "High bias leads to overfitting, high variance leads to underfitting",
      "Bias and variance are unrelated",
      "None of the above",
    ],
    correctAnswer:
      "High bias leads to underfitting, high variance leads to overfitting",
  },
];

function ML() {
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
    <div
      className="mx-10 my-10 p-10  bg-slate-700 
    rounded-lg text-gray-200"
    >
      <h1 className="text-center mb-7 font-bold text-4xl text-slate-800 dark:text-white">
        Machine Learning Quiz
      </h1>
      {showscore ? (
        <div
          className="flex flex-col items-center justify-center text-center font-semibold 
        text-2xl h-96 bg-slate-800 rounded-lg shadow-lg p-6"
        >
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
export default ML;

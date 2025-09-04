import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "Which of the following is NOT a type of network topology?",
    options: ["Star", "Bus", "Ring", "Tree"],
    correctAnswer: "Circle",
  },
  {
    question: "Which protocol is used to send email?",
    options: ["SMTP", "HTTP", "FTP", "SNMP"],
    correctAnswer: "SMTP",
  },
  {
    question: "Which of the following is a connection-oriented protocol?",
    options: ["UDP", "IP", "TCP", "ICMP"],
    correctAnswer: "TCP",
  },
  {
    question: "What is the default port number for HTTPS?",
    options: ["21", "25", "80", "443"],
    correctAnswer: "443",
  },
  {
    question: "Which device operates at the Data Link layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Gateway"],
    correctAnswer: "Switch",
  },
  {
    question:
      "Which layer of the OSI model is responsible for encryption and compression?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Transport Layer",
      "Network Layer",
    ],
    correctAnswer: "Presentation Layer",
  },
  {
    question: "What is the main function of DNS?",
    options: [
      "Translate domain names to IP addresses",
      "Send emails",
      "Encrypt data packets",
      "Detect network errors",
    ],
    correctAnswer: "Translate domain names to IP addresses",
  },
  {
    question:
      "Which of the following IP addresses is reserved for loopback testing?",
    options: ["127.0.0.1", "255.255.255.255", "192.168.0.1", "0.0.0.0"],
    correctAnswer: "127.0.0.1",
  },
  {
    question: "Which multiple access technique is used by Wi-Fi?",
    options: ["FDMA", "TDMA", "CDMA", "CSMA/CA"],
    correctAnswer: "CSMA/CA",
  },
  {
    question: "Which protocol is used for file transfer over the Internet?",
    options: ["SMTP", "FTP", "HTTP", "DNS"],
    correctAnswer: "FTP",
  },
  {
    question:
      "Which address is used to identify a device at the Data Link layer?",
    options: ["IP Address", "MAC Address", "Port Number", "URL"],
    correctAnswer: "MAC Address",
  },
  {
    question:
      "Which layer of the OSI model is responsible for reliable data transfer?",
    options: [
      "Session Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
    ],
    correctAnswer: "Transport Layer",
  },
  {
    question: "What is the maximum length of a standard IPv4 address in bits?",
    options: ["32", "64", "128", "16"],
    correctAnswer: "32",
  },
  {
    question:
      "Which protocol is used to securely transfer hypertext documents?",
    options: ["HTTP", "HTTPS", "FTP", "TELNET"],
    correctAnswer: "HTTPS",
  },
  {
    question: "In networking, what does ARP stand for?",
    options: [
      "Address Resolution Protocol",
      "Access Request Protocol",
      "Advanced Routing Protocol",
      "Automatic Repeat Protocol",
    ],
    correctAnswer: "Address Resolution Protocol",
  },
  {
    question: "Which device connects multiple networks together?",
    options: ["Switch", "Router", "Bridge", "Repeater"],
    correctAnswer: "Router",
  },
  {
    question: "What is the size of a MAC address?",
    options: ["32 bits", "48 bits", "64 bits", "128 bits"],
    correctAnswer: "48 bits",
  },
  {
    question: "Which protocol is used for remote login?",
    options: ["SMTP", "SNMP", "TELNET", "FTP"],
    correctAnswer: "TELNET",
  },
  {
    question:
      "Which is the fastest data transmission medium among the following?",
    options: [
      "Twisted Pair Cable",
      "Coaxial Cable",
      "Optical Fiber",
      "Radio Waves",
    ],
    correctAnswer: "Optical Fiber",
  },
  {
    question:
      "In TCP/IP, which layer is equivalent to the OSI Transport Layer?",
    options: ["Application", "Internet", "Transport", "Network Access"],
    correctAnswer: "Transport",
  },
];

function CN() {
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
        Computer Networks Quiz
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
export default CN;

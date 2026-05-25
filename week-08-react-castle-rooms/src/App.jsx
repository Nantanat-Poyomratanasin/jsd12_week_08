// import { useState } from "react";
import { useState, useContext } from "react";
import { MessageContext } from "./contexts/messageContext/MessageContext";
import Castle from "./components/01_Castle";
// import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";

export default function App() {
  // ##################ส่วนนี้เอาไปไว้ใน MessageProvider.jsx ##################
  // creating state variables
  // const [question, setQuestion] = useState("");

  // const [answer, setAnswer] = useState("");

  // const handleQuestion = (e) => {
  //   console.log(e);
  //   setQuestion(e.target.value);
  // };

  // const handleAnswer = (e) => {
  //   console.log(e);
  //   setAnswer(e.target.value);
  // };
  // ##################ส่วนนี้เอาไปไว้ใน MessageProvider.jsx ##################

  //ตรงนี้คือการเรียกใช้ของใน context
  const { question, answer, handleQuestion } = useContext(MessageContext);

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for JSD12:{" "}
        <span className="text-yellow-300">
          {/* question or waiting for a message */}
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:
        <span className="text-yellow-300">
          {/* answer or waiting for a reply */}
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
      {/* App.jsx ไม่ต้องส่ง handleAnswer(props) ไปให้ Castle.jsx แล้ว */}
      {/* <Castle question={question} answer={answer} handleAnswer={handleAnswer} /> */}
      {/* <SimpleAsyncAwait /> */}
      <Castle />
    </div>
  );
}

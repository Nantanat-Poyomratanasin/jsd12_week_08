import { useState, useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function SecretRoom() {
  //เป็นการเอา context มาใช้ ใส่ในฟังก์ชั่น useContext()
  const { question, answer, handleAnswer } = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%]">
      <h1>SecretRoom</h1>
      <p>
        Message from outside:
        <span>{question ? question : "wating for a message..."}</span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here"
      />
      <p className="text-green-300">
        Reply to the outside:
        <span className="text-yellow-300">
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>

      {/* <SecretRoom /> */}
    </div>
  );
}

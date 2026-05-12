import { useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  // creating state variables
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (newAnswer) => {
    setAnswer(newAnswer);
  };

  return (
    <MessageContext.Provider
      value={{
        question,
        answer,
        handleQuestion,
        handleAnswer,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

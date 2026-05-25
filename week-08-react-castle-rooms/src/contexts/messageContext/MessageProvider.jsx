import { useState } from "react";
import { MessageContext } from "./MessageContext";

//สร้าง provider --> สร้าง react component
//props ที่ส่งให้ใน provider เรียก ว่า children ซึ่ง children คือ react component อีกอันหนึ่งเลย
export const MessageProvider = ({ children }) => {
  // creating state variables
  //ประกาศตัวแปร State variables พวกนี้ ใน provider แทน ซึ่ง provider สร้างจากโครงที่ชื่อ context
  //ประกาศไว้เฉยๆ provider ยังไม่สามารถเอาไปแจกจ่ายได้ ต้องเอาไปใส่ใน value ของ provider ก่อน แล้ว component อื่นถึงจะเอาไปใช้ได้
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return (
    //สร้าง provider โดยใช้ MessageContext ที่ import เข้ามา โดยข้างในคือตัวแปร children ที่รับเข้ามาเป็น props
    //ตรงนี้คือ react ซ้อน react
    //แล้วไปใชใช้ MessageProvider ใน main.jsx ต่อ
    <MessageContext.Provider
      //ส่งตัวแปรที่ประกาศข้างบนเป็น props ไปให้กับ provider (เพราะ provider ก็เป็น react เลยส่งผ่าน prop ได้)
      //แล้ว provider จะส่งไปให้ component อื่นไปใช้ต่อ ผ่านทาง value ของ provider
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

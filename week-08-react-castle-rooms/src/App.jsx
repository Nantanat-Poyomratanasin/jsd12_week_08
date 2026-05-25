import { useState } from "react";
import Castle from "./components/01_Castle";
import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";
// import { useState, useContext } from "react";
// import { MessageContext } from "./contexts/messageContext/MessageContext";

export default function App() {
  // creating state variables

  //ในที่นี้ เราสร้าง state ที่ชื่อ question เพื่อเก็บข้อความที่ผู้ใช้พิมพ์เข้ามาใน textarea ของ App.jsx
  // และจัดการกับการเปลี่ยนแปลงของมันผ่านฟังก์ชัน handleQuestion
  //usestate ตอนแรกเป็นค่าว่าง "" เพราะเราต้องการให้ textarea เริ่มต้นเป็นค่าว่าง
  // และเมื่อผู้ใช้พิมพ์ข้อความเข้ามาใน textarea ค่าของ question จะถูกอัปเดตผ่านฟังก์ชัน handleQuestion
  // ที่เราได้กำหนดไว้ และใน SecretRoom.jsx เราจะใช้ค่าของ question เพื่อแสดงข้อความที่ได้รับจาก App.jsx
  // และให้ผู้ใช้สามารถพิมพ์คำตอบกลับไปยัง App.jsx ได้ผ่านฟังก์ชัน handleAnswer ที่เราจะสร้างขึ้นใน App.jsx
  // เช่นเดียวกันกับ question และ handleQuestion
  //ไม่ส่ง handlequestion ไปให้ Castle.jsx เพราะ Castle.jsx
  // ไม่จำเป็นต้องรู้เกี่ยวกับการจัดการกับการเปลี่ยนแปลงของ question เพราะการเปลี่ยนแปลงของ question
  // จะถูกจัดการใน App.jsx เท่านั้น และ Castle.jsx จะเป็นตัวกลางในการส่งข้อมูลระหว่าง App.jsx และ SecretRoom.jsx เท่านั้น
  const [question, setQuestion] = useState("");
  //สร้างตัวแปรใหม่ที่ชื่อ answer เพื่อเก็บคำตอบที่ผู้ใช้พิมพ์เข้ามาใน SecretRoom.jsx
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  //############Class Lesson#################
  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  //############Pokemon game#################
  // const handleAnswer = (value) => {
  //   setAnswer(value);
  // };

  //const { question, handleQuestion, answer } = useContext(MessageContext);

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
      {/* Castle is 2nd component, it will receive the question as a prop and send back the answer to App.jsx */}
      {/* เราต้องส่ง question และ answer ไปให้ Castle.jsx ด้วย เพราะ Castle.jsx จะเป็นตัวกลางในการส่งข้อมูลระหว่าง App.jsx และ SecretRoom.jsx */}
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
      {/* เรียก SimpleAsyncAwait component เพื่อแสดงผลการดึงข้อมูลจาก API ด้วย async/await */}
      {/* SimpleAsyncAwait เป็น react componet อีกตัว */}
      <SimpleAsyncAwait />
      {/* <Castle /> */}
    </div>
  );
}

import Tower from "./02_Tower";

// export default function Castle({ question }) {
//Castle รับ props ที่ส่งมาจาก App.jsx ซึ่งประกอบด้วยตัวแปร question และ answer
// และฟังก์ชัน handleAnswer ที่ใช้ในการจัดการกับการเปลี่ยนแปลงของคำตอบที่ผู้ใช้พิมพ์เข้ามาใน SecretRoom.jsx
// ที่ใช้ในการสื่อสารระหว่าง App.jsx และ SecretRoom.jsx ผ่าน Castle.jsx
export default function Castle({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
      <h1>Castle</h1>
      {/* {question ? question : "Waiting for a message..."} */}
      {/* <Tower question={question} /> */}

      {/* ส่งให้ Tower.jsx แล้วส่งต่อไปเรื่อยๆ จนถึง SecretRoom.jsx เพื่อให้ SecretRoom.jsx 
      สามารถรับค่าของ question และ answer ได้ผ่าน props ที่ส่งต่อกันมาเรื่อยๆ */}
      {/* ถ้า question มีการเปลี่ยนแปลง มันจะ rerender ใหม่ทั้ง App.jsx และ
      SecretRoom.jsx */}
      <Tower question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}

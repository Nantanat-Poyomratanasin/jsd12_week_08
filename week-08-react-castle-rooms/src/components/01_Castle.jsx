import Tower from "./02_Tower";

//วิธีแบบส่ง props
// export default function Castle({ question, answer, handleAnswer }) {

//วิธีแบบ context --> ลบตัวแปรออกเพราะCastle ไม่ต้องส่ง props แล้ว
export default function Castle() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
      <h1>Castle</h1>

      {/* <Tower question={question} answer={answer} handleAnswer={handleAnswer} /> */}
      <Tower />
    </div>
  );
}

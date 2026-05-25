import SecretRoom from "./09_SecretRoom";

// export default function Nook({ question, answer, handleAnswer }) {
export default function Nook() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-violet-500 w-[90%]">
      <h1>Nook</h1>
      {/*     
      <SecretRoom
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      /> */}
      <SecretRoom />
    </div>
  );
}

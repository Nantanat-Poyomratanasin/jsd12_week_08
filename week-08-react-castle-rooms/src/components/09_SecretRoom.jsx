import { useState, useEffect } from "react";
// import { MessageContext } from "../contexts/messageContext/MessageContext";

{
  /* 
// ตัวแปร question จะถูกส่งมาจาก App.jsx ผ่าน props
// คือไฟล์ 08_Nook.jsx ซึ่งจะส่งต่อไปยัง SecretRoom.jsx อีกทีหนึ่ง และก่อนหน้านี้ต่อๆมาจาก App.jsx
// ซึ่งเป็นตัวกำหนด state และฟังก์ชัน handleQuestion เพื่อจัดการกับการเปลี่ยนแปลงของข้อความที่ผู้ใช้พิมพ์เข้ามาใน textarea

// ใน SecretRoom.jsx เราจะใช้ตัวแปร question เพื่อแสดงข้อความที่ได้รับจาก App.jsx และใช้ฟังก์ชัน handleQuestion
// เพื่ออัปเดตค่าของ question เมื่อผู้ใช้พิมพ์ข้อความใหม่เข้ามา

// เป็น answer เพราะเป็นข้อความที่ส่งมาจากฝั่ง secret room เพื่อส่งกลับไปยัง App.jsx ซึ่งจะถูกแสดงในส่วนของ "Reply from Secret Room"
// answer เขียนเป็น const เพราะเราจะใช้ useState เพื่อสร้าง state สำหรับเก็บคำตอบที่ผู้ใช้พิมพ์เข้ามาใน SecretRoom.jsx
// และจัดการกับการเปลี่ยนแปลงของมันผ่านฟังก์ชัน handleAnswer
// แต่เพราะ React เป็นการสื่อสารแบบทางเดียว (one-way data flow) ซึ่งข้อมูลจะไหลจากพ่อแม่ (parent) ไปยังลูก (child) เท่านั้น
// ทำให้ App.jsx ส่งตัวแปร question และฟังก์ชัน handleQuestion ลงมาได้ แต่ SecretRoom.jsx ไม่สามารถส่งค่ากลับไปยัง App.jsx ได้โดยตรง
// ดังนั้น ถ้าเราต้องการให้ SecretRoom.jsx ส่งข้อมูลกลับไปยัง App.jsx ได้
// เราจะต้องสร้าง answer และ ฟังก์ชัน handleAnswer ใน App.jsx ที่สุดท้ายจะรับค่าจาก SecretRoom.jsx และอัปเดต state ของ answer ใน App.jsx ได้
// สรุปคือตัวแปร answer และ handleAnswer จะถูกส่งมาจาก App.jsx ผ่าน props เช่นเดียวกับ question และ handleQuestion
*/
}

//#############Class Lesson#####################
export default function SecretRoom({ question, answer, handleAnswer }) {
  // บรรทัดนี้เราจะไปประกาศใน App.jsx แทน เพราะเราต้องการให้ state ของ answer,setAnswer อยู่ใน App.jsx
  //แล้วรับตัวแปร answer และฟังก์ชัน handleAnswer ผ่าน props แทน
  //const [answer, setAnswer] = useState("");

  // const handleAnswer = (e) => {
  //   console.log(e);
  //   setAnswer(e.target.value);
  // };

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%]">
      <h1>SecretRoom</h1>
      <p>
        Message from outside:
        {/* span จะให้ render ค่าที่อยู่ในตัวแปร question ถ้ามีค่า แต่ถ้าไม่มีค่าจะให้ render ข้อความ "Waiting for a message..." */}
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
      {/* {question ? question : "Waiting for a message..."} */}
      {/* <SecretRoom /> */}
    </div>
  );
}
//#############Class Lesson#####################

//#############Pokemon game#####################
// export default function SecretRoom({ question, answer, handleAnswer }) {
//   const [pokemons, setPokemons] = useState([]);
//   const [isDropping, setIsDropping] = useState(false);
//   const [missionStarted, setMissionStarted] = useState(false);
//   const [escaped, setEscaped] = useState(false);

//   const handleEscape = () => {
//     setPokemons([]);
//     setMissionStarted(false);
//     setEscaped(true);

//     handleAnswer("");
//   };

//   useEffect(() => {
//     if (
//       question.toLowerCase() === "how are you?" &&
//       answer.toLowerCase() === "help"
//     ) {
//       setMissionStarted(true);
//     }
//   }, [question, answer]);

//   const sendPokemon = async () => {
//     try {
//       setIsDropping(false);

//       const randomIds = Array.from(
//         { length: 3 },
//         () => Math.floor(Math.random() * 151) + 1,
//       );

//       const pokemonData = await Promise.all(
//         randomIds.map(async (id) => {
//           const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

//           const data = await res.json();

//           return {
//             name: data.name,
//             image: data.sprites.front_default,
//           };
//         }),
//       );

//       setPokemons(pokemonData);

//       setTimeout(() => {
//         setIsDropping(true);
//       }, 100);

//       setEscaped(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%] overflow-hidden min-h-screen">
//       <h1 className="text-2xl font-bold text-red-300">SecretRoom</h1>
//       <p className="mt-4">
//         Message from outside:
//         {/* span จะให้ render ค่าที่อยู่ในตัวแปร question ถ้ามีค่า แต่ถ้าไม่มีค่าจะให้ render ข้อความ "Waiting for a message..." */}
//         <span className="text-yellow-300 ml-2">
//           {question ? question : "wating for a message..."}
//         </span>
//       </p>
//       <textarea
//         value={answer}
//         onChange={(e) => handleAnswer(e.target.value)}
//         className="bg-white text-black rounded px-2 py-1"
//         placeholder="Type your message here"
//       />
//       <p className="text-green-300">
//         Reply to the outside:
//         <span className="text-yellow-300">
//           {answer ? answer : "Waiting for a reply..."}
//         </span>
//       </p>
//       {/* {question ? question : "Waiting for a message..."} */}
//       {/* <SecretRoom /> */}
//       {/* ALERT */}
//       {answer.toLowerCase() === "help" && (
//         <div className="mt-4 text-red-400 animate-pulse font-bold">
//           🚨 HELP SIGNAL DETECTED 🚨
//         </div>
//       )}
//       {/* POKEMON DROP ZONE */}
//       <div className="flex gap-6 mt-10 min-h-[250px]">
//         {pokemons.map((pokemon, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center transition-all duration-1000 ${
//               isDropping
//                 ? "translate-y-[0px] opacity-100"
//                 : "-translate-y-[300px] opacity-0"
//             }`}
//             style={{
//               transitionDelay: `${index * 300}ms`,
//             }}
//           >
//             <img
//               src={pokemon.image}
//               alt={pokemon.name}
//               className="w-32 h-32 object-contain animate-bounce"
//             />

//             <p className="capitalize text-white font-bold mt-2">
//               {pokemon.name}
//             </p>
//           </div>
//         ))}
//       </div>
//       {missionStarted && pokemons.length === 0 && (
//         <button
//           onClick={sendPokemon}
//           className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-2 rounded-xl transition"
//         >
//           Send Pokemon
//         </button>
//       )}
//       {/* GAME STATUS */}
//       {pokemons.length > 0 && (
//         <div className="mt-8 bg-black/40 px-6 py-4 rounded-xl">
//           <h2 className="text-xl text-green-300 font-bold">
//             Rescue Squad Sent!
//           </h2>

//           <p className="text-gray-200">{pokemons.length} pokemon deployed</p>
//         </div>
//       )}
//       {pokemons.length > 0 && (
//         <button
//           onClick={handleEscape}
//           className="mt-4 bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded-xl transition"
//         >
//           Escape
//         </button>
//       )}

//       {escaped && (
//         <div className="mt-6 text-blue-300 font-bold animate-pulse">
//           Agent escaped successfully...
//         </div>
//       )}
//     </div>
//   );
// }
//#############Pokemon game#####################

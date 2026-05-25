import { useState, useEffect } from "react";
//เขียนแบบ simple
export default function SimpleAsyncAwait() {
  // สร้าง state variables คือเป็นตัวแปรที่ถ้าค่าเปลี่ยน react จะ rerender
  //เริ่มต้นด้วยการตั้งค่า name เป็น "loading..." เพื่อแสดงข้อความในขณะที่กำลังดึงข้อมูลจาก API
  // ว่ากำลังโหลดข้อมูลอยู่ และเมื่อข้อมูลถูกดึงมาแล้วชื่อโปเกมอนจะถูกแสดงแทนข้อความ "loading..."
  const [name, setName] = useState("loading...");

  //UseEffect แบบใหม่
  // function ข้างในจะทำงานเมื่อ useEffect  ทำงาน
  useEffect(() => {
    // สร้างฟังก์ชัน getData ที่เป็น async function เพื่อดึงข้อมูลจาก API
    // pattern การเขียนแบบนี้จริงๆก็คือ promise
    const getData = async () => {
      //API endpoint ที่เราต้องการดึงข้อมูลมาใช้ ในที่นี้คือข้อมูลของโปเกมอนตัวแรกจาก pokeapi
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      //เอาสิ่งที่ได้จากการดึงข้อมูลเก็บในตัวแปร res แล้วแปลงเป็น json เพื่อให้เราสามารถใช้งานข้อมูลนั้น
      // ได้ในรูปแบบของ JavaScript object

      //แล้วเอามาเก็บในตัวแปรชื่อ data --> กลายเป็น object แล้ว
      const data = await res.json();

      //เอาชื่อที่ได้ใส่ใน function setName เพื่ออัปเดตค่า name ใน state variable
      // ให้เป็นชื่อของโปเกมอนที่เราได้ดึงมาจาก API
      setName(data.name);
    };

    // เรียกใช้ฟังก์ชัน getData เพื่อเริ่มต้นการดึงข้อมูลจาก API
    //มีการกำหนดว่าให้ทำงานแค่ครั้งแรก ที่ component ถูก mount เท่านั้น เช่นตอนที่เราเปิดหน้าเว็บขึ้นมาใหม่
    // หรือ refresh หน้าเว็บ
    // เพราะ dependency array เป็น empty array []
    getData();
  }, []);

  //UseEffect แบบเก่า
  // useEffect(()=>{
  //   fetch("https://pokeapi.co/api/v2/pokemon/1")
  //   .then((res)=>res.json())
  //   .then((data))=>setName(data.name));
  // },[]);

  return (
    // ตรงนี้คือส่วนที่กำหนดการแสดงผลของ SimpleAsyncAwait component
    // โดยจะแสดงชื่อโปเกมอนที่ได้จากการดึงข้อมูลจาก API ผ่านตัวแปร name
    // ที่เราได้ตั้งค่าไว้ใน state variable และเมื่อข้อมูลถูกดึงมาแล้วชื่อโปเกมอน
    // จะถูกแสดงในหน้าจอแทนข้อความ "loading..." ที่เราได้ตั้งค่าไว้ตอนแรก

    <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-xl">
      <h2 className="text-xl font-bold text-yellow-300">Simple async/await</h2>

      {/* แสดงชื่อโปเกมอนจากตัวแปร name ที่ได้จากการดึงข้อมูลจาก API */}
      {name && <p className="capitalize text-2xl">{name}</p>}
    </div>
  );
}

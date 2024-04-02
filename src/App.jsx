import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className="container w-full h-screen py-10"
      style={{ backgroundColor: color }}
    >
      <div className="bar flex justify-center  text-center  gap-1">
        <div className="boxes rounded-2xl  bg-red-700 text-white py-1 px-2"
        onClick={()=> setColor("red")}
        >
          Red
        </div>
        <div className="boxes rounded-2xl bg-blue-700 text-white py-1 px-2"
        onClick={()=>setColor("blue")}
        >
          Blue
        </div>
        <div className="boxes rounded-2xl bg-green-700 text-white py-1 px-2"
        onClick={()=>setColor("green")}
        >
          Green
        </div>
        <div className="boxes rounded-2xl bg-orange-400 text-white py-1 px-2"
          onClick={()=>setColor("orange")}
        >
          Orange
        </div>
        <div className="boxes rounded-2xl text-center bg-gray-700 text-white py-1 px-2"
          onClick={()=>setColor("gray")}
        >
          Gray
        </div>
        <div className="boxes rounded-2xl bg-yellow-300 text-white py-1 px-2"
          onClick={()=>setColor("yellow")}
        >
          Yellow
        </div>
        <div className="boxes rounded-2xl bg-purple-700 text-white py-1 px-2"
          onClick={()=>setColor("purple")}
        >
          Purple
        </div>
      </div>
    </div>
  );
};

export default App;

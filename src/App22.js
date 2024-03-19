import { useState } from "react";
export default function App6() {
  const [Arr, setArr] = useState([1, 2, 4, 6]);
  const addStudent = () => {
    setArr((Arr) => [...Arr, 7]);
    // setArr((Arr) => [7,...Arr]);
    // setArr((Arr) => [...Arr.slice(0,2), 7,...Arr.slice(2)]);
    // setArr((Arr) => [...Arr.slice(0, Arr.indexOf(4)),7,...Arr.slice(Arr.indexOf(4)),]);
  };
  return (
    <>
      <button onClick={addStudent}>Update Array</button>
      <div>
        {Arr && Arr.map((value, index) => <div key={index}>{value}</div>)}
      </div>
    </>
  );
}

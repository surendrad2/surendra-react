import { useState, useEffect, useRef } from "react";
export default function App24() {
  const [name, setName] = useState("");
  const prevName = useRef(0);
  useEffect(() => {
    prevName.current = name;
  });
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Current Name: {name}</h1>
      <h1>Previous Name: {prevName.current}</h1>
    </>
  );
}

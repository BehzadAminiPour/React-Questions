import { useEffect, useState } from "react";

export default function AppUseState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("useEffect triggered");
  },[count]);

  return (
    <>
      <div>
        App {count}
        <button onClick={() => handleClick()}>Hello</button>
      </div>
    </>
  );
}

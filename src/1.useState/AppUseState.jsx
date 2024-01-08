import { useState } from "react";

export default function AppUseState() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(() => {
    console.log("Check our function");
    const userLS = localStorage.getItem("users");
    return JSON.parse(userLS) ?? [];
  });
  //    In React, when you use useState with a function as
  //   the initial state (like you did with setUser),
  //    that function is called only once, during the initial render.
  //    This is a mechanism to compute the initial state value.
  console.log("result", user);
  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setIsLoading((prevLoad) => !prevLoad);
  };

  // const [data, setData] = useState({
  //   count: 0,
  //   isLoading: false,
  // });
  // const handleClick = () => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     count: data.count + 1,
  //     isLoading: !data.isLoading,
  //   }));
  // };

  return (
    <>
      <div>
        App {count}
        <button onClick={() => handleClick()}>Hello</button>
        {isLoading ? "true" : "false"}
      </div>
    </>
  );
}

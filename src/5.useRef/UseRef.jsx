import { useRef, useState } from "react";
//useRef dos not re-render our component
// we use useRef if we nedd to get access to dom element or
// we need to store some value as a mutable value between re-rendering our app
export default function UseRef() {
  console.log("render");
  const [userName, setUserName] = useState("");
  const inputRef = useRef();
  const onTextFocus = () => {
    console.log("onTextFocus", inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "Hello";
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onTextFocus} style={{ marginTop: "5px" }}>
        Focus in the input
      </button>
      <p>{userName}</p>
    </div>
  );
}

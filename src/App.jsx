// import { UseReducer } from "./3.useReducer/UseReducer";

import { useContext } from "react";
import { ThemeContext } from "./4.useContext/theme";
import UseRef from "./5.useRef/UseRef";

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      {/* <UseReducer /> */}
      <h1 style={{ background: theme.background, color: theme.foreground }}>
        Hello, Context!
      </h1>
      <button onClick={()=>toggleTheme()}>Change Mode</button>
      <UseRef/>
    </>
  );
}

export default App;

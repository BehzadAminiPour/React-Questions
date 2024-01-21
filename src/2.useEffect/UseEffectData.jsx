import { useEffect, useState } from "react";
import axios from "axios";

export const UseEffectData = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setName(response.data);
    });
  }, []);

  return (
    <div>
      {name.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

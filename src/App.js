import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random/3")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setImages(data.message);
  //     });
  // }, []);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  useEffect(() => {
    document.title = text;
  }, [text]);

  console.log("Component rendering");

  return (
    <div>
        <button onClick = {() => setCount((count) => count + 1)}>I have been clicked {count} times</button>
        <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>

  );
}

export default App;

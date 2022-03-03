import React, { useEffect, useState } from "react";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";
import Header from "./components/Header";
import useLocalStorageNumber from "./hook/useLocalStorageNumber";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber("bestScore", 0);
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });
  console.log("bestScore: ", bestScore);
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

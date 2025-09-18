import { useState } from "react";
import '../css/main.css';

function Main() {
    const moods = ["Happy 😊", "Angry 😡", "Sad 😢"];

    const [currentMood, setCurrentMood] = useState("😊 Happy")
    const [countSad, setCountSad] = useState(0)
    const [countHappy, setCountHappy] = useState(0)
    const [countAngry, setCountAngry] = useState(0)
    const [history, setHistory] = useState([]);

    function handleMood(mood) {
        setCurrentMood(mood);

        if (mood.includes("Happy")) setCountHappy((prev) => prev + 1);
        if (mood.includes("Sad")) setCountSad((prev) => prev + 1);
        if (mood.includes("Angry")) setCountAngry((prev) => prev + 1);

        setHistory((prev) => [mood, ...prev].slice(0, 3));
    }

    function resetCounts() {
        setCountAngry(0);
        setCountSad(0);
        setCountHappy(0);
        setHistory([]);
        setCurrentMood(null);
    }

    function randomMood() {
        let rndMood = moods[Math.floor(Math.random() * moods.length)];
        handleMood(rndMood);
    }

    return (
        <div className="app">
            <div className="card current-mood">
                <h2>Current Mood:</h2>
                <p>{currentMood}</p>
            </div>

            <div className="mood-buttons">
                <div className="mood-item">
                    <button onClick={() => handleMood("Happy 😄")}>Happy 😄</button>
                    <div>{countHappy}</div>
                </div>
                <div className="mood-item">
                    <button onClick={() => handleMood("Sad 😢")}>Sad 😢</button>
                    <div>{countSad}</div>
                </div>
                <div className="mood-item">
                    <button onClick={() => handleMood("Angry 😡")}>Angry 😡</button>
                    <div>{countAngry}</div>
                </div>
            </div>

            <div className="actions">
                <button onClick={resetCounts}>Reset</button>
                <button onClick={randomMood}>Random Mood</button>
            </div>

            <div className="card history">
                <h3>Mood History:</h3>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Main;
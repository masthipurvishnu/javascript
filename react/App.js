// https://codesandbox.io/s/musing-nightingale-0rp77d?file=/src/UserDetails.js
// console.log(JSON.stringify(userDetails));
console.log(userDetails.length);
import { useState } from "react";
import Results from "./Results";
import UserDetails from "./UserDetails";
import "./styles.css";
const tbleStyles = {};
export default function App() {
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [count, setCount] = useState(1);
    const [flag, setFlag] = useState(false);
    const [winnersName, setWinnersName] = useState("");

    const iCounter = () => {
        if (count === 10) {
            setWinnersName(
                p1Score > p2Score ? "Player1 is the winner" : "Player2 is the winner"
            );
        }
        setCount(count <= 10 ? count + 1 : 10);
    };
    const tossValue = () => {
        const randomValue = (Math.random() * 100).toFixed(0);
        console.log(`randomValue - ${randomValue}`);
        return !((randomValue * 100).toFixed(0) % 2);
    };
    const getP1Score = () => {
        console.log(
            `p1 - ${flag} - conter - ${count}; p1Score - ${p1Score}; p2Score - ${p2Score}`
        );
        const v = tossValue();
        setP1Score(p1Score + (v ? 1 : 0));
        iCounter();
        setFlag(!flag);
    };
    const getP2Score = () => {
        console.log(`p1 - ${flag} - conter - ${count}`);
        const v = tossValue();
        setP2Score(p2Score + (v ? 1 : 0));
        iCounter();
        setFlag(!flag);
    };
    return (
        <div className="App">
            <h1>Welcome to Virtual Toss</h1>
            <table styles={tbleStyles}>
                <thead>
                    <th>Player 1</th>
                    <th>Planer 2</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button disabled={count > 10 || flag} onClick={getP1Score}>
                                YourTurn
                            </button>
                        </td>
                        <td>
                            <button disabled={count > 10 || !flag} onClick={getP2Score}>
                                YourTurn
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>{p1Score}</label>
                        </td>
                        <td>
                            <label>{p2Score}</label>
                        </td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
            <Results player={winnersName} />
            <UserDetails />
        </div>
    );
}

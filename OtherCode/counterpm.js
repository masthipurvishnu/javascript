import { useState } from "react";
import "./styles.css";

export default function App() {
    const [count, setCount] = useState(0);

    const iCounter = () => {
        setCount(count === 50 ? 50 : count + 1);
        const x = ["Apples", "Oraganges", "Oraganges", "Pears", "Apples", "Pears"];

        console.log(Set(x));
        // setCount((count) => {
        //   if (count === 50) {
        //     return 50;
        //   } else {
        //     return count + 1;
        //   }
        // });
    };
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button disabled={count === 50} onClick={iCounter}>
                Counter
            </button>
            <label>{count}</label>
        </div>
    );
}

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [jokes, setjokes] = useState([]);
    // added state

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/jokes")
            .then((response) => setjokes(response.data))
            .catch((error) => console.log(error));
    });

    return (
        <>
            <h1>Hello</h1>
            <p>JOKES: {jokes.length}</p>

            {jokes?.map((joke, index) => (
                <div key={joke?.id}>
                    <p>{joke?.title}</p>
                    <p>{joke?.content}</p>
                </div>
            ))}
        </>
    );
}

export default App;

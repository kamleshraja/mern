import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("dist")); // this dist folder is use to frontend bulid

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke",
        },
        {
            id: 2,
            title: "Another joke",
            content: "This is another joke",
        },
        {
            id: 3,
            title: "Third joke",
            content: "This is a third joke",
        },
        {
            id: 4,
            title: "Fourt joke",
            content: "This is a fourth joke",
        },
    ];

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

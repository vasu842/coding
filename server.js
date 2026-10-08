require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


app.post("/api/chat", async (req, res) => {

    try {

        // INPUT
        const question = req.body.question;

        if (!question) {
            return res.status(400).json({
                answer: "Please enter a question."
            });
        }


        // GPT PROCESS
        const response = await openai.responses.create({

            model: "gpt-5.5",

            input: question

        });


        // OUTPUT
        const answer = response.output_text;


        res.json({
            answer: answer
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            answer: "AI error: " + error.message
        });

    }

});


app.listen(3000, () => {

    console.log(
        "MyAI running at http://localhost:3000"
    );

});
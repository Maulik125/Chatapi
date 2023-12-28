const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenApi } = require("openai");

const config = new Configuration({
    apiKey: "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",
});


const openai = new OpenApi(config);

// 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
//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req,res) => {

    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-devinci-003",
        max_tokens: 512,
        temprature: 0,
        prompt:prompt,
 });

    res.send(completion.data.choice[0].text);
})

const port = 5000;
app.listen(port,() => {
        console.log("server listing the ${port}");
});


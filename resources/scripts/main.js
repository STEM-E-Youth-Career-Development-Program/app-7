import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD60yb7EjCaeOszNSfYvfBcArtrXo67sSM");

document.getElementById('summarizeButton').addEventListener('click', summarizeText);

async function summarizeText() {
    const userInput = document.getElementById('mainText').value;
    if (userInput.trim() === "") {
        document.getElementById('responseBox').innerText = "Please enter some text.";
        return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent(userInput);
        const text = await result.response.text();
        console.log(text);
        document.getElementById('responseBox').innerText = text;
    } catch (error) {
        console.error("Error generating content:", error);
        document.getElementById('responseBox').innerText = "Sorry, there was an error generating the response.";
    }
}

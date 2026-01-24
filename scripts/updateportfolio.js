// scripts/update_portfolio.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. Setup the Brain
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// 2. Get the user's input text (from command line)
const userInput = process.argv[2];

if (!userInput) {
  console.error("❌ Please provide a description! \nUsage: node scripts/update_portfolio.js 'I won 1st prize...'");
  process.exit(1);
}

// 3. Define the path to your data
const dataPath = path.join(__dirname, '../src/data/events.json');

async function runAgent() {
  console.log(`🤖 Agent is analyzing: "${userInput}"...`);

  const prompt = `
    You are a Portfolio Manager Agent. 
    Convert this text into a JSON object for a timeline.
    Current Date: ${new Date().toLocaleDateString()}
    
    Rules:
    - "tag" must be one of: "Hackathon Winner", "Milestone", "Certification", "Project", "Workshop".
    - "color" must be: #FFD700 (Win), #38bdf8 (Milestone), #00ff00 (Cert), #800080 (Workshop).
    - "date" should be short (e.g., "Jan 2026").
    
    Input: "${userInput}"
    
    Output JSON only:
    { "title": "...", "date": "...", "description": "...", "tag": "...", "color": "..." }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const cleanJson = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    const newEvent = JSON.parse(cleanJson);

    const currentData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    currentData.unshift(newEvent); // Add to top
    fs.writeFileSync(dataPath, JSON.stringify(currentData, null, 2));

    console.log("✅ Success! Added:", newEvent.title);
  } catch (error) {
    console.error("❌ Agent failed:", error);
  }
}

runAgent();
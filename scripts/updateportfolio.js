// scripts/updateportfolio.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { exec } = require('child_process'); // This tool lets Node run terminal commands!

// 1. Setup the Brain
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Note: We are using the correct model now!
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// 2. Get the user's input text
const userInput = process.argv[2];

if (!userInput) {
  console.error("❌ Please provide a description!");
  process.exit(1);
}

const dataPath = path.join(__dirname, '../src/data/events.json');

// Helper function to run terminal commands
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) console.log(`Note: ${stderr}`);
      console.log(stdout);
      resolve(stdout);
    });
  });
};

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
    
    Output strictly valid JSON only:
    { "title": "...", "date": "...", "description": "...", "tag": "...", "color": "..." }
  `;

  try {
    // A. Generate Content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const cleanJson = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    const newEvent = JSON.parse(cleanJson);

    // B. Save to File
    const currentData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    currentData.unshift(newEvent);
    fs.writeFileSync(dataPath, JSON.stringify(currentData, null, 2));
    
    console.log(`✅ AI successfully added: "${newEvent.title}"`);
    console.log("🚀 Starting Auto-Deploy to GitHub...");

    // C. Auto-Push to GitHub
    await runCommand('git add .');
    await runCommand(`git commit -m "AI Agent added: ${newEvent.title}"`);
    await runCommand('git push');

    console.log("🎉 DONE! Website is updating live.");

  } catch (error) {
    console.error("❌ Agent failed:", error);
  }
}

runAgent();
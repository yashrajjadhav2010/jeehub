const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf8');

// Remove the global Window declaration if it exists
code = code.replace(/declare global \{\s*interface Window \{\s*GROQ_API_KEY: string;\s*\}\s*\}/g, '');

// Replace all usages in getTopicSuggestions
code = code.replace(/const apiKey = window\.GROQ_API_KEY;\s*if \(!apiKey\) throw new Error\("API key not found in window object\."\);\s*const response = await fetch\("https:\/\/api\.groq\.com\/openai\/v1\/chat\/completions", \{\s*method: "POST",\s*headers: \{\s*"Content-Type": "application\/json",\s*"Authorization": `Bearer \$\{apiKey\}`\s*\},/g, 
  `const response = await fetch("/api/groq/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },`);

fs.writeFileSync('src/services/aiService.ts', code);
console.log('Done');

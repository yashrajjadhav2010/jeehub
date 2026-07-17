const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf8');

code = code.replace(/const apiKey = window\.GROQ_API_KEY;\s*if \(!apiKey\) throw new Error\("API key not found in window object\."\);/g, '');
code = code.replace(/"Authorization": `Bearer \$\{apiKey\}`/g, '');
code = code.replace(/https:\/\/api\.groq\.com\/openai\/v1\/chat\/completions/g, '/api/groq/chat');
code = code.replace(/headers: \{\s*"Content-Type": "application\/json",\s*\}/g, 'headers: { "Content-Type": "application/json" }');

fs.writeFileSync('src/services/aiService.ts', code);
console.log('Done');

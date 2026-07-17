kill $(lsof -t -i:3000)
sleep 2
node dist/server.cjs &
PID=$!
sleep 2
curl -X POST http://localhost:3000/api/groq/chat -H "Content-Type: application/json" -d '{"model": "llama-3.3-70b-versatile", "messages": [{"role": "user", "content": "hi"}], "max_tokens": 10}'
kill $PID

const { app } = require('./dist/server.cjs');
const PORT = 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Test prod server running on ${PORT}`);
});

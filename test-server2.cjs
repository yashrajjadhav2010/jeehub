const { app } = require('./dist/server.cjs');
app.listen(3002, "0.0.0.0", () => console.log("Test server running on 3002"));

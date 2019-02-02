const express = require("express");
const app = express();
const router = require("./routes/indexRouter");

const PORT = 3000 || process.env.termpAppPort;
const HOST = "127.0.0.1" || process.env.termpAppHost;

app.listen(PORT, () => {
	console.log(`Server started on: ${HOST}:${PORT}`);
});

app.use("/", router);
// app.get("*", (req, res) => {});

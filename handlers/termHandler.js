const terminal = require("../lib/terminal");
const termHandler = {};

termHandler.getOutput = async (req, res) => {
	console.log(req.url);
	try {
		const command = req.query.command || "echo";
		const parameters = req.query.parameters || ["Hello World"];
		let output = await terminal(command, parameters);
		res.status(200).send(output);
	} catch (err) {
		console.log(err);
		res.status(400).send();
	}
};
module.exports = termHandler;

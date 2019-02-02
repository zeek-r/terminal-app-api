const { spawn } = require("child_process");

const terminal = (command, props = {}) => {
	let output = "";
	let stderr = "";
	return new Promise((resolve, reject) => {
		try {
			const parameters = props.parameters ? props.parameters : "";
			sh = spawn(command, parameters);
			sh.stdout.on("data", data => {
				output += data;
			});

			sh.stderr.on("data", data => {
				stderr += data;
			});

			sh.on("close", code => {
				console.log(output, stderr);
				if (code !== 0) {
					console.log("err");
					resolve(stderr);
				}
				resolve(output);
			});
			sh.on("error", err => {
				reject(err);
			});
		} catch (err) {
			console.log(err);
			reject(err);
		}
	});
};

module.exports = terminal;

const { spawn } = require("child_process");

const terminal = (command, params) => {
	let output = "";
	let stderr = "";
	return new Promise((resolve, reject) => {
		try {
			const parameters = params ? params : [""];
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
					resolve(stderr);
				}
				resolve(output);
			});
			sh.on("error", err => {
				reject(err);
			});
		} catch (err) {
			reject(err);
		}
	});
};

module.exports = terminal;

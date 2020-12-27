import util from "util";
import { exec, spawn } from "child_process";

const promisedExec = util.promisify(exec);

export const call = async (command: string) => {
	const { stdout, stderr } = await promisedExec(command);

	return { stdout, stderr };
};

export const spawnDetached = (command: string, args: Array<string>) => {
	const child = spawn(command, args, {
		detached: true,
		shell: true,
		stdio: ["ignore", "ignore", "ignore"],
	});
	child.unref();
};

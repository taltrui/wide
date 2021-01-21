import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import os from "os";

const filePaths: { [index: string]: any } = {
	darwin: "~/Library/Preferences",
	win32: "Users/User/AppData",
	linux: `/home/${os.userInfo().username}/.config`,
};

const adapter = new FileSync(
	`${filePaths[os.platform()] || filePaths.linux}/wide/db.json`
);

const db = low(adapter);

db.defaults({ wsm: { aliases: {}, projects: {} } }).write();

export default db;

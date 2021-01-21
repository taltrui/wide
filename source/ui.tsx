import React, { FC } from "react";
import { Commands } from "./constants";
import { CommandUiType, FlagsType } from "./types";
import Ema from "./Commands/ema";

const App: FC<{
	flags?: FlagsType;
	command?: string;
	args?: Array<string>;
}> = ({ flags, command = "ema", args }) => {
	const CommandUi: CommandUiType = Commands[command];

	return CommandUi ? <CommandUi flags={flags} args={args} /> : <Ema flags={flags} />;
};

export default App;

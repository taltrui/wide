import React, { FC } from "react";
import Ema from "./Commands/ema";
import { Commands } from "./constants";
import { CommandUiType, FlagsType } from "./types";

const App: FC<{
	flags?: FlagsType;
	command?: string;
	args?: Array<string>;
}> = ({ flags, command = "ema", args }) => {
	const CommandUi: CommandUiType = Commands[command] || Ema;

	return <CommandUi flags={flags} args={args} />;
};

export default App;

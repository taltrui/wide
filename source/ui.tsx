import React, { FC } from "react";
import { Commands } from "./constants";
import { CommandUiType, FlagsType } from "./types";
import Ema from "./Commands/ema";

const App: FC<{ flags?: FlagsType; command?: string }> = ({
	flags,
	command = "ema",
}) => {
	const CommandUi: CommandUiType = Commands[command];

	return CommandUi ? <CommandUi flags={flags} /> : <Ema flags={flags} />;
};

export default App;

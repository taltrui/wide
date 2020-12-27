import { Item } from "ink-select-input/build/SelectInput";
import { FC } from "react";

export interface EmaFlagsType {
	index?: number;
	name?: string;
}

export type FlagsType = EmaFlagsType;

export interface EmaType {
	flags?: EmaFlagsType;
}

export interface EmaLayoutType {
	emulators: Array<{ value: string; label: string }>;
	onSelect: (item: Item<string>) => void;
}

export interface CommandsType {
	[ema: string]: FC<EmaType>;
}

export type CommandUiType = FC<EmaType> | undefined;

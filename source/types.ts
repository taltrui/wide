import { Item } from "ink-select-input/build/SelectInput";
import { FC } from "react";

export interface EmaFlagsType {
	index?: number;
	name?: string;
}

export interface WsmFlagsType {
	rootDir?: string;
	rescan?: boolean;
}

export type FlagsType = EmaFlagsType | WsmFlagsType;

export interface EmaType {
	flags?: EmaFlagsType;
	args?: Array<string>;
}

export interface WsmType {
	flags?: WsmFlagsType;
	args?: Array<string>;
}

export interface EmaLayoutType {
	emulators: Array<{ value: string; label: string }>;
	onSelect: (item: Item<string>) => void;
	loading: Boolean;
}

export interface CommandsType {
	'ema': FC<EmaType>;
	'wsm': FC<WsmType>;
}

export type CommandUiType = FC<EmaType> | FC<WsmType> | undefined;

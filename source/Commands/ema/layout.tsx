import React, { FC, Fragment } from "react";
import { Newline, Text } from "ink";
import { EmaLayoutType } from "../../types";
import Spinner from "ink-spinner";
import SelectInput from "ink-select-input";

const EmaLayout: FC<EmaLayoutType> = ({ emulators, onSelect }) =>
	emulators.length === 0 ? (
		<Text>
			<Newline />
			<Spinner type="point" />
			<Text> Iniciando</Text>
			<Newline />
		</Text>
	) : (
		<Fragment>
			<Text bold>
				Emuladores disponibles: <Newline />
			</Text>
			<SelectInput items={emulators} onSelect={onSelect} />
			<Text>
				<Newline />
			</Text>
		</Fragment>
	);

export default EmaLayout;

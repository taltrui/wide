import React, { FC } from "react";
import { Newline, Text } from "ink";
import { EmaLayoutType } from "../../types";
import SelectInput from "ink-select-input";
import Loading from "../../components/Loading";

const EmaLayout: FC<EmaLayoutType> = ({ emulators, onSelect, loading }) => (
	<Loading loading={loading}>
		<Text bold>
			Emuladores disponibles: <Newline />
		</Text>
		<SelectInput items={emulators} onSelect={onSelect} />
		<Text>
			<Newline />
		</Text>
	</Loading>
);

export default EmaLayout;

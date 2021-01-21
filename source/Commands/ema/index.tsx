import { useApp } from "ink";
import React, { FC, useEffect, useState } from "react";
import { EmaType } from "../../types";
import { call, spawnDetached } from "../../utils/exec";
import EmaLayout from "./layout";

const Ema: FC<EmaType> = ({ flags }) => {
	const [emulators, setEmulators] = useState<
		Array<{ value: string; label: string }>
	>([]);

	const [loading, setLoading] = useState<Boolean>(true);
	const { exit } = useApp();

	const handleSelect = (
		emulator: { value: string; label: string } | undefined
	) => {
		if (emulator) {
			spawnDetached("emulator", ["-avd", emulator.value]);
			exit();
		}
	};

	useEffect(() => {
		const getList = async () => {
			const { stdout } = await call("emulator -list-avds");
			const formattedEmulators = stdout
				.split("\n")
				.map((_emulator) => ({ value: _emulator, label: _emulator }))
				.filter((_emulator) => _emulator.value !== "");

			if (flags?.index) {
				if (formattedEmulators[flags.index]) {
					return handleSelect(formattedEmulators[flags.index]);
				}
			}

			if (flags?.name) {
				const emu = formattedEmulators.find(
					(_emulator) => _emulator.value === flags.name
				);
				if (emu) return handleSelect(emu);
			}

			setEmulators(formattedEmulators);
			setLoading(false)
		};

		getList();
	}, []);

	return (
		<EmaLayout
			emulators={emulators}
			onSelect={handleSelect}
			loading={loading}
		/>
	);
};

export default Ema;

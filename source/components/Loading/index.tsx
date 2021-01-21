import React, { FC, Fragment } from "react";
import { Newline, Text } from "ink";
import Spinner from "ink-spinner";

const Loading: FC<{ loading: Boolean }> = ({ children, loading }) => (
	<Fragment>
		{loading ? (
			<>
				<Newline />
				<Spinner type="point" />
				<Text> Cargando</Text>
				<Newline />
			</>
		) : (
			children
		)}
	</Fragment>
);

export default Loading;

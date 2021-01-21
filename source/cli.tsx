#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(
	`
	Usage
	  $ wide

	Options
		--name  Your name

	Examples
	  $ wide --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
			index: {
				type: "number",
			},
		},
	}
);

render(
	<App flags={cli.flags} command={cli.input[0]} args={cli.input.slice(1)} />
);

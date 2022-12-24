#!/usr/bin/env node

/**
 * dot-cli
 * CLI app that helps you generate and modify your personal dotfiles
 *
 * @author vieitesss <https://github.com/vieitesss>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { help, debug } = flags;

(async () => {
	init();
	(process.argv.slice(2).length === 0 || help) && cli.showHelp(0);

	debug && log(flags);
})();

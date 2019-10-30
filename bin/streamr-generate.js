#!/usr/bin/env node
const program = require('commander')
const generate = require('../src/generate')
const { exitWitHelpIfArgsNotBetween, createFnParseInt } = require('./common')

program
    .description('generate and print semi-random JSON data to stdout')
    .option('-r, --rate <n>', 'rate in milliseconds', createFnParseInt('--rate'), 500)
    .version(require('../package.json').version)
    .parse(process.argv)

exitWitHelpIfArgsNotBetween(program, 0, 0)

generate(program.rate)

#!/usr/bin/env node

const { program } = require("@caporal/core")

program
    .command("palindrome","text palindrome")
    .argument("input","check palindrome")
    .action(({logger, args}) => {
        logger.info('palindrome')
        logger.info(args)
        let output = args
            .input
            .split('')
            .reverse()
            .join('')
        logger.info("output: " + output)
        return args
            .input
            .toLowerCase() === output.toLowerCase()
            ? console.log('Is palindrome? Yes')
            : console.log('Is palindrome? No')
    })

program.run()
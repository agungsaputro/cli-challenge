#!/usr/bin/env node

const { program } = require("@caporal/core")

program
    .command("obfuscate","obfuscate")
    .argument("input", "text to obfuscate")
    .action(({logger, args}) =>{
        logger.info('obfuscate')
        logger.info(args)
        let output = args.input.split('')
            .map(char => {
                return '&#' + char.charCodeAt(0) + ';'
            })
            .join('')
        return console.log(output)
    })
    
program.run()
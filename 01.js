#!/usr/bin/env node

const {program} = require("@caporal/core")

program
    .command("lowercase", "lowercase transformation")
    .argument("input","string toLowerCase")
    .action(({logger, args}) =>{
        logger.info('lowercase')
        logger.info(args)
        let output = args.input.toLowerCase()
        return console.log(output)
    })
    .command("uppercase","uppercase transformation")
    .argument("input","string toUpperCase")
    .action(({logger, args}) => {
        logger.info('uppercase')
        logger.info(args)
        let output = args.input.toUpperCase()
        return console.log(output)
    })
    .command("capitalize", "capitalize transformation")
    .argument("input","string toCapitalize")
    .action(({logger, args}) =>{
        logger.info('capitalize')
        logger.info(args)
        let output = args.input.toLowerCase().split(' ')
            .map(text => {
                if(text.length > 1)
                    return text[0].toUpperCase() + text.substr(1)
                else
                    return text.toUpperCase()
            })
            .join(' ')
        return console.log(output)
    })

program.run()
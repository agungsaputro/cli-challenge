#!/usr/bin/env node

const {program} = require("@caporal/core")

program
    .command("add","add array")
    .argument('[env...]',"add numbers of array")
    .action(({logger,args}) =>{
        logger.info('add')
        logger.info(args.env.reduce((a,b) => a + b ))

    })
    .command("substract", "substract array")
    .argument('[env...]',"substract number of array")
    .action(({logger,args}) =>{
        logger.info('substract')
        logger.info(args.env.reduce((a,b) => a - b))
    })
    .command("multiply", "substract array")
    .argument('[env...]',"substract number of array")
    .action(({logger,args}) =>{
        logger.info('add')
        logger.info(args.env.reduce((a,b) => a * b))
    })
    .command("devide", "devide array")
    .argument('[env...]',"devide number of array")
    .action(({logger, args}) =>{
        logger.info('devide')
        logger.info(args.env.reduce((a,b) => a / b))
    })


program.run()

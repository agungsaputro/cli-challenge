#!/usr/bin/env node

/**
 * #5 NOT WORK
 */

const { program } = require("@caporal/core")


program
    .command("random", "random alphabet")
    .option("--length", "length string", program.INT,32)
    .option("--letters <bool>","letter or not", program.BOOLEAN,true)
    .option("--numbers <bool>","numbers or not", program.BOOLEAN,true)
    .option("--uppercase"," all uppercase",program.BOOLEAN,false)
    .option("--lowercase", "all lowercase", program.BOOLEAN, false)
    .action(({args, options, logger}) =>{
        logger.info('random')
        let length = options.length
        logger.info(options)
        let str = ''

        if( options.letters == true){
            str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if(options.numbers == true){
            str += '0123456789'
        }

        let output = ''

        for( let i= 0; i<length; i++){
            output += str.charAt(Math.floor(Math.random()*str.length))
        }
        if(options.uppercase){
            output = output.toUpperCase()
        }
        if(options.lowercase){
            output = output.toLowerCase()
        }

        return console.log(output)
    })

program.run()
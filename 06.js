#!/usr/bin/env node

const { program } = require("@caporal/core")
const os = require('os')

program
    .command("ip", "private ip")
    .action(({logger}) =>{
        logger.info('ip')
        let interfaces = os.networkInterfaces()

        for (let devName in interfaces) {
            let iface = interfaces[devName]

            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i]
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return console.log(alias.address)
                }
            }
        }

        return console.log("0.0.0.0")
    })

program.run()
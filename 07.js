#!/usr/bin/env node

const { program } = require("@caporal/core")
const http = require('http')

program
    .command("ip-external","public ip")
    .action(({logger}) =>{
        logger.info('ip-external')
        http.get({
            'host': 'api.ipify.org',
            'port': 80,
            'path': '/'
        }, res => {
            res.on('data', ip => {
                return console.log(ip)
            })
        }).on("error", err=>{
            return console.log("not connected to internet.")
        })
    })

program.run()
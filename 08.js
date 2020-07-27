#!/usr/bin/env node


const { program } = require("@caporal/core")
const scrapeIt = require("scrape-it")

program
    .command("headlines"," healine news from kompas.com")
    .action(({logger}) =>{
        logger.info('headlines')
        scrapeIt('https://www.kompas.com',{
            headlines: {
                listItem: '.headline__thumb__item',
                data: {
                    title: '.headline__thumb__title',
                    url: {
                        selector: 'a',
                        attr: 'href'
                    }
                }
            }
        }).then(({data,response}) =>{
            console.log(`status code: ${response.statusCode}`)
            data
                .headlines
                .forEach(item => {
                    console.log(`Title: ${item.title}\nURL: ${item.url}\n\n`)
                })
        }).catch(err =>{
            console.log(err)
        })
    })

program.run()
const fs = require('fs');
const path = require('path');
const db = require('./database');

function Resolve(client, urlArr){
    return new Promise((res)=>{
        var clientDir = path.join(global.paths.clients, String(client.id));
        GetDirectory(client).then((directory)=>{
            // find page to supply
            let tmp = {
                meta: [],
                styles: [],
                scripts: []
            }
            
            
            directory.pages.forEach((page)=>{
                if(page.paths.indexOf(urlArr.join('/')) > -1){
                    tmp.styles = directory.global.styles.concat(page.styles)
                    tmp.scripts = directory.global.scripts.concat(page.scripts)
                    tmp.page = page;
                    res(tmp);
                }
            })
        })
    })
}


// this is all garbage and need to be cleaned up but it works for now
function GetDirectory(client){
    return new Promise((res)=>{
        var directory = {
            global: {
                meta:[],
                scripts:[],
                styles:[]
            },
            pages: []
        };
        db.select({
            columns: ["p.*"],
            table: `pages p JOIN client_domains cd ON (cd.domain_id = p.domain_id)`,
            where: `cd.domain = '${client.domain}' ORDER BY p.page_id`
        }).then((pages)=>{
            new Promise((res)=>{
                pages.forEach((page, key)=>{
                    db.select({columns: ["content"], table: 'pages_meta', where: `page_id = '${page.page_id}'`}).then((result)=>{
                        page.meta = [];
                        if(result.length > 0){
                            result.forEach((meta)=>{page.meta.push(JSON.parse(meta.content))});
                        }
        
                        db.select({columns: ["path"], table: 'pages_paths', where: `page_id = '${page.page_id}'`}).then((result)=>{
                            page.paths = [];
                            if(result.length > 0){
                                result.forEach((path)=>{page.paths.push(path.path)});
                            }
        
                            db.select({columns: ["defer", "src"], table: 'pages_scripts', where: `page_id = '${page.page_id}'`}).then((result)=>{
                                page.scripts = [];
                                if(result.length > 0){
                                    page.scripts = result
                                }
                                
                                db.select({columns: ["src"], table: 'pages_styles', where: `page_id = '${page.page_id}'`}).then((result)=>{
                                    page.styles = [];
                                    if(result.length > 0){
                                        page.styles = result
                                    }
                                    
                                    directory.pages.push(page);
                                    if(key >= pages.length -1) res();
                                });
                            });
                        });
                    });
                })
            }).then(()=>{
                db.select({columns: ["content"], table: 'domain_meta', where: `domain_id = '${client.domain_id}'`}).then((result)=>{
                    if(result.length > 0){
                        result.forEach((meta)=>{directory.global.meta.push(JSON.parse(meta.content))});
                    }

                    db.select({columns: ["src, defer"], table: 'domain_scripts', where: `domain_id = '${client.domain_id}'`}).then((result)=>{
                        if(result.length > 0){
                            directory.global.scripts = result;
                        }
    
                        db.select({columns: ["src"], table: 'domain_styles', where: `domain_id = '${client.domain_id}'`}).then((result)=>{
                            if(result.length > 0){
                                directory.global.styles = result
                            }
        
                            res(directory);
                        });
                    });
                });
                
            });
        })
    })
}

module.exports.resolve = Resolve;
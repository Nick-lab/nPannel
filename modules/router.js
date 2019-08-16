const fs = require('fs');
const path = require('path');
const db = require('./database');

function Resolve(client, urlArr){
    return new Promise((res)=>{
        //var clientDir = path.join(global.paths.clients, String(client.id));
        
        // find page to supply
        let tmp = {
            meta: [],
            styles: [],
            scripts: []
        }
        let url = '/' + urlArr.join('/');
        db.getRow(`SELECT dp.*, cd.id as domain_id FROM domain_pages dp JOIN client_domains cd ON (cd.id = dp.domain) WHERE cd.domain = '${client.domain}' AND dp.route = '${url}' `).then((page)=>{
            if(page){
                db.query(`SELECT file FROM domain_scripts WHERE domain = ${page.domain_id}`).then((domain_scripts) => {
                    db.query(`SELECT file FROM domain_styles WHERE domain = ${page.domain_id}`).then((domain_styles) => {
                        db.query(`SELECT file FROM page_scripts WHERE page = '${page.id}'`).then((page_scripts) => {
                            db.query(`SELECT file FROM page_styles WHERE page = '${page.id}'`).then((page_styles) => {
                                if(page){
                                    tmp.page = page;
                                }
                                if(domain_scripts) domain_scripts.forEach((script)=>{tmp.scripts.push({src: script.file})});
                                if(domain_styles) domain_styles.forEach((style)=>{tmp.styles.push({src: style.file})});
                                if(page_scripts) page_scripts.forEach((script)=>{tmp.scripts.push({src: script.file})});
                                if(page_styles) page_styles.forEach((style)=>{tmp.styles.push({src: style.file})});
                    
                                res(tmp);
                            })
                        })
                    })
                })
            }else{
                res(false);
            }
        })
    })
}

module.exports.resolve = Resolve;
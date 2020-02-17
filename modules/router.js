const fs = require('fs');
const path = require('path');
const db = require('./database');

var tmp;
var url;

function Resolve(client, urlArr){
    return new Promise(async (res)=>{
        // find page to supply
        tmp = {
            meta: [],
            styles: [],
            scripts: []
        }
        url = '/' + urlArr.join('/');
        var page = await getPage(client);
        
        if(page){
            tmp.styles.push('/css/' + page.id + '.css');
            let domain_scripts = await db.query(`SELECT file FROM domain_scripts WHERE domain = ${page.domain_id}`);
            let domain_styles = await db.query(`SELECT file FROM domain_styles WHERE domain = ${page.domain_id}`);
            let domain_meta = await db.query(`SELECT * FROM domain_meta WJERE domain = ${page.domain_id}`);
            let page_scripts = await db.query(`SELECT file FROM page_scripts WHERE page = '${page.id}'`);
            let page_styles = await db.query(`SELECT file FROM page_styles WHERE page = '${page.id}'`);
            let page_meta = await db.query(`SELECT * FROM page_meta WHERE page = '${page.id}'`);

            if(page){
                tmp.page = page;
            }
            
            if(domain_meta) {
                domain_meta.forEach((meta) => {
                    let overide = false;
                    if(page_meta) {
                        page_meta.forEach((pmeta) => {
                            if(pmeta.type == meta) {
                                overide = true;
                            }
                        })
                    }
                })
            }

            if(domain_scripts) domain_scripts.forEach((script)=>{tmp.scripts.push(script.file)});
            if(domain_styles) domain_styles.forEach((style)=>{tmp.styles.push(style.file)});
            if(page_scripts) page_scripts.forEach((script)=>{tmp.scripts.push(script.file)});
            if(page_styles) page_styles.forEach((style)=>{tmp.styles.push(style.file)});

            res(tmp);
        }else{
            res(false);
        }
    })
}

function getPage(client) {
    return new Promise(async (res) => {
        var page = await db.getRow(`SELECT dp.*, cd.id as domain_id FROM domain_pages dp JOIN client_domains cd ON (cd.id = dp.domain) WHERE cd.domain = '${client.domain}' AND dp.route = '${url}' `);
        if(!page && url == '/') {
            page = await db.getRow(`SELECT dp.*, cd.id as domain_id FROM domain_pages dp JOIN client_domains cd ON (cd.id = dp.domain) WHERE cd.domain = '${client.domain}' AND dp.type = 'default'`);
        }
        if(!page && url !== '/') {
            page = await db.getRow(`SELECT dp.*, cd.id as domain_id FROM domain_pages dp JOIN client_domains cd ON (cd.id = dp.domain) WHERE cd.domain = '${client.domain}' AND dp.type = '404'`);
        }
        res(page);
    })
}

module.exports.resolve = Resolve;
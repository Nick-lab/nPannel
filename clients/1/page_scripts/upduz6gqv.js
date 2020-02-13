module.exports = (module) => {
    if(module.session.view) session.view += 1;
    else module.session.view = 1;
    return {session: module.session, url: '/'+module.url.join('/')};
}
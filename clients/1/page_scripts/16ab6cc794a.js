module.exports = (options) => {
    if(options.session.views) options.session.views += 1;
    else options.session.views = 1;
    return options.session;
}
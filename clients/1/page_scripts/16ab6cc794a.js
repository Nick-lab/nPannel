module.exports = (options) => {
    if(options.session.views) options.session.views += 1;
    else options.session.views = 1;
    return {session: options.session, get: options.GET};
}
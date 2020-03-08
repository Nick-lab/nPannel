module.exports = function (client, router) {
    this.overRide = function (url) {
        let urlArr = url.split('/');
        router.Resolve(client, urlArr).then((route) => {
            return route ? true : false;
        })
    }
}
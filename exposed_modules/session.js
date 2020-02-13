module.exports = (req) => {
    this.set = (key, value) => {
        req.session[key] = value;
    }

    this.get = (key) => {
        if(typeof req.session[key] != null) {
            return req.session[key];
        } else {
            return false;
        }
    }
}
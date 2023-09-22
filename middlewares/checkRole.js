function checkRole(role) {
    return function(req, res, next) {
        console.log(req.user)
        if (req.user && req.user.role === role) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    };
}

module.exports = checkRole;
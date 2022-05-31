module.exports = () => {
    return (req, res, next) => {
        res.setHeader('content-type', 'application/json');
        next();
    }
}
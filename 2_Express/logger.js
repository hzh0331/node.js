const logger = (req, res, next)=>{
    console.log(req.method)
    console.log(req.user)
    next()
}
module.exports = logger

const tasks = [

]

module.exports = {

    async index(req, res){
        return res.render('index.njk',{tasks})
    },
    async store(req,res){
        const {name} = req.body
        tasks.push({name})
        return res.render('index.njk',{tasks})
    }
}
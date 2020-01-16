const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

//index, show, store, update, destroy

module.exports = {
    async index(req, res){
        const devs = await Dev.find()

        return res.json(devs)
    },
    async strore(req, res) {
        const { github_username, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({ github_username })
        if (!dev) {
            const techsArray = parseStringAsArray(techs)

            let { name, login, avatar_url, bio } = await axios.get(`https://api.github.com/users/${github_username}`)
            if (!name)
                name = login

            const location = {
                type: 'Point',
                coordinates: [latitude, longitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })


        }

        return res.json(dev)
    },

    
}
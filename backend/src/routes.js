const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Tipos de Parâmentros:
// Query Params: req.query (Filtros, ordenação, paginação,...) EX: ?username=Vitor
// Route Params: request.params (Identificar um recurso na alteração ou remoção) Ex: /user/1
// Body: request.body (Dados para criação ou alteração de registro)

routes.post('/devs', DevController.strore)
routes.get('/devs', DevController.index)

routes.get('/search', SearchController.index)

module.exports=routes
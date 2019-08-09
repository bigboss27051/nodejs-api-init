const auth = require('../controllers/auth')

module.exports = app => {
	//set route for call api http://localhost:7700/api/auth/login
	//set function for url api
	app.post('/api/auth/login', auth().login) 
}
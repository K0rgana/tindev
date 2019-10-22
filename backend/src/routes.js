const express = require('express');
const DevControler = require('./controllers/DevController');


const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.json({ message: `Hello ${req.query.name}`});
// });

routes.post('/devs', DevControler.store);

module.exports = routes;
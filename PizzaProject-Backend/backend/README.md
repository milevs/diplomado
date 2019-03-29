# Proyecto backend para el module 5 de el diplomado "Cloud computing"

# Requerimientos de sistema
1. NodeJS
2. Navegador web (firefox, chrome)
3. Mongo Server installed


## Pasos de instalacion y prueba
$ cd backend
$ npm install
$ node app.js
$ abrir el navegador http://localhost:3000

## API REST Enpoints
GET /api/pizza_branch

POST /api/pizza_branch
	Body Sample:
	{
		"code": "SUC-01",
		"name": "Dominos Pizza",
		"description": "Av. Ecologica Nro. 420 acera sub.",
		"phone": "4722092",
		"mobile": "77416233",
		"manager":"Windzor Urena"
	}

DELETE /api/pizza_branch/<_id>

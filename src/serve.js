const express = require('express')
const nunjucks = require('nunjucks')
const Routes = require('./routes')
const path = require('path')

const app = express()

//Caminho para a pasta public
const templatePath = path.resolve(__dirname, '..', 'public')

//Configurar os arquivos estáticos [css,imagem] para que o express entenda
app.use(express.static(templatePath))

//Configurar para express entenda json
app.use(express.json())

//Conigurar para express entender form requisição
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'njk');

nunjucks.configure(templatePath, {
    autoescape: true,
    express: app
});





app.use(Routes)

app.listen(3333)
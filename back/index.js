
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors')
const { routes } = require('./src/routes');


//настроим подключение к бд
mongoose.connect(
    'mongodb://localhost:27017/mevnshop', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
//     .then(
//   (res) => {console.log('CONNECTCONNECTCONNECTCONNECTCONNECT', res)},
//   err => { console.log('ERROR', err) }
// );
console.log(1111)


//инициализируем приложение
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




routes.forEach((item) => { 
    console.log(item)
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
     
})



//объявим наши роуты
//запуск сервера где колбек функция это експресс, если он не заработает сервер остановится 19,22
const PORT = 3000; 

http.createServer({}, app).listen(PORT);
console.log('1111')
console.log(`server is on port ${PORT}`)
// // http.createServer(function (request, response) {
// //     console.log(request.url)
// //     console.log(request.method)
// //     response.end('hello 11111111111');
// // }).listen(PORT);

 

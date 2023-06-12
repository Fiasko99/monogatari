// @external
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')

// @internal
const router = require('./router/index');
const { orm, db } = require('./orm/index')
const { errorMiddleware } = require('./middleware')
const createTestData = require('./createTestData')

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

app.use('/api', router);
app.use(errorMiddleware.handler)

orm.sync({alter: false, force: true}).then(async () => {
  console.log("База данных подключена");
  await createTestData(db);
  console.log("Тестовые данные созданы");
  app.listen(port, () => {
    console.log(`Сервер запущен`);
    console.log(`Ссылка: http://localhost:${port}`);
  });
}).catch(e => console.log(e))

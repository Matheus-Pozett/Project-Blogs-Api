const express = require('express');
const error = require('./middlewares/error');
const loginRouter = require('./routes/loginRoute');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

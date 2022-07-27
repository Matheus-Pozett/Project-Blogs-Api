const express = require('express');
const error = require('./middlewares/error');
const categoryRouter = require('./routes/categoryRoute');
const loginRouter = require('./routes/loginRoute');
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

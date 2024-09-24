const express = require('express')
require('dotenv')

const router = require('./router')

const app =express();

app.use(express.json());

app.use('/api', router)

app.use('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.listen(5000, ()=>console.log(`server running on 5000`))
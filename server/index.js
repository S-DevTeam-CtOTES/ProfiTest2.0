require('dotenv').config()
const https = require("https");
const fs = require("fs");
const helmet = require("helmet");
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');


const options = {
  key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
  cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const PORT = process.env.PORT || 5000;
const app = express()

// app.use(express.static('build'));

app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    //origin: "*"
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

// app.listen(process.env.PORT);
//
https.createServer(options, app).listen(process.env.PORT);

const start = async () =>  {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on Port = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start()
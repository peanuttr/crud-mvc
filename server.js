const express = require('express'),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    connect = require('./config/db'),
    userRoute = require('./routes/user');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

app.set("view engine", "ejs");

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, '/views')));

app.use((req, res, next) => {
    req.conn = connect;
    next();
})


app.use('/user', userRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server listening at PORT = ${PORT}`));
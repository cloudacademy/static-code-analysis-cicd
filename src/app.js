import express from 'express';
import ejs from 'ejs';
import routes from './app/routes/index';

const app = express()

app.set('views', __dirname + '/app/assets/views');
app.set('view engine', 'ejs');

app.use('/', routes);
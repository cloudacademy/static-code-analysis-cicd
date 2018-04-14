import express from 'express';
import routes from './app/routes/index';
import api from './app/routes/index';

const app = express();

app.set('views', __dirname + '/app/assets/views');
app.set('view engine', 'ejs');

app.use(bodyParser.text({
    type: "*/*"
}));

app.use('/', routes);
app.use('/api', api);

// Catch not found paths
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .render('error', {
            message: err.message
        });
});
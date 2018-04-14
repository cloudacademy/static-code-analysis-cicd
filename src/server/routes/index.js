import { Router } from 'express';
import path from 'path';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome!'
    });
});

routes.get('/bundle.js', (req, res) => {
    res.sendFile(path.resolve('dist/bundle.js'));
});

export default routes;
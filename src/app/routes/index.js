import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome!'
    });
});

routes.get('/bundle.js', (req, res) => {
    res.sendFile('/../../dist/bundle.js');
});

export default routes;
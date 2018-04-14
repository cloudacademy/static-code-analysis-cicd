import { Router } from 'express';
import path from 'path';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome!'
    });
});

export default routes;
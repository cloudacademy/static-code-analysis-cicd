import { Router } from 'express';
import messageController from '../assets/js/message.controller';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome!'
    });
});

routes.post('/api/message', (req, res, next) => {
    messageController.generateMessage(req, res, next);
});

export default routes;
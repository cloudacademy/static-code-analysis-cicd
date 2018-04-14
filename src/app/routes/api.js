import { Router } from 'express';
import messageController from '../controllers/message';

const routes = Router();

routes.get('/api', (req, res, next) => {
    messageController.generateMessage(req, res, next);
});

export default routes;
import { Router } from 'express';
import fs from 'fs';
import messageController from '../assets/js/message.controller';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index', {
        message: 'Welcome!'
    });
});

routes.get('/bundle.js', (req, res) => {
    const bundleJsContent = fs.readFileSync(path.join(__dirname, '/../../dist/bundle.js'));
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(bundleJsContent);
});

export default routes;
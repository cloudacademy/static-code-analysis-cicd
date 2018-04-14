import app from './server/app';
import config from './server/config/config';

const port = config.port;
app.listen(port, () => console.log(`Listening on port ${port}`));
import routes from './routes';

const express = require('express');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

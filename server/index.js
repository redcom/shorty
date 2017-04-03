import express from 'express';
import helmet from 'helmet';
import path from 'path';
import http from 'http';

const ENV = process.env.NODE_ENV || 'dev';
const isDevEnv = ENV === 'dev';
const baseDir = path.dirname(__dirname);

const app = express();

// protect api from various hacking techniques
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());

if (process.env.NODE_ENV !== 'production') {
  // This DISABLES browser cache, just use it in development
  app.use(helmet.noCache());
}

  if (isDevEnv) {
    app.use(express.static(path.join(baseDir, '/build')));
  } else {
    app.use(express.static(path.join(baseDir, '/build')));
  }


app.get('/*', function (req, res) {
   res.sendFile(path.join(baseDir, '/build', 'index.html'));
});



const PORT = process.env.PORT || 8888;

const server = http.createServer(app);
server.listen(PORT);

if (isDevEnv) {
  console.log(`Server is listening on port ${PORT}`);
}

export default app;



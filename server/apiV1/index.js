import express from 'express';

import { newLink, deleteLink, getLink, getAllLinks } from './links';

const Router = express.Router();

const ApiV1 = () => {
  Router.post('/links', newLink)
    .delete('/links', deleteLink)
    .get('/links/:id', getLink)
    .get('/links', getAllLinks);

  return Router;
};

export default ApiV1();

import links from './links';

export default (router) => {
  router.post('/v1/links', links);
};

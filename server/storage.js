// plain storage with quick access methods to manage a simple store
const storage = () => {
  const store = (bucket = []) => ({
    get: id => bucket[id],
    put: item => [item, ...bucket],
    delete: id => bucket.filter(i => i.id !== id),
    getAll: () => bucket,
  });

  return store();
};

export default storage;

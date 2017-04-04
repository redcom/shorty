// plain storage with quick access methods to manage a simple store
const storage = () => {

  const store = (bucket = []) => {
    return {
      get: (id) => bucket[id],
      put: (item) => bucket = [item, ...bucket],
      delete: (id) => bucket.filter(i => i.id !== id),
      getAll: () => bucket,
    };
  };

  return store();
};

export default storage;

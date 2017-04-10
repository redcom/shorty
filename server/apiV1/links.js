export const newLink = (req, res) => {
  const storage = req.app.get('storage');
  const item = {
    ...req.body,
    id: storage.getNextId(),
    shortUrl: `short_${storage.getNextId()}`,
  };

  storage.put(item);
  res.json(storage.get(0));
};

export const deleteLink = (req, res) => {
  const storage = req.app.get('storage');
  const id = req.body.id || -1;

  storage.delete(id);
  res.sendStatus(200);
};

export const getLink = (req, res) => {
  const storage = req.app.get('storage');
  const itemId = req.params.id || -1;

  res.json(storage.get(itemId));
};

export const getAllLinks = (req, res) => {
  const storage = req.app.get('storage');

  res.json(storage.getAll());
};

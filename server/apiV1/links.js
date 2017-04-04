export const newLink = (req, res) => {
  const storage = req.app.get('storage');
  const item = req.body;

  storage.put(item);
  res.sendStatus(200);
};

export const deleteLink = (req, res) => {
  const storage = req.app.get('storage');
  const itemId = req.params.id || -1;

  storage.delete(itemId);
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

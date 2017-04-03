export default (req, res) => {
  console.log(req.params, req.json);

  res.sendCode(200);
};


const create = (req, res, next) => {
  const db = req.app.get("db");
  let { name, description, price, url } = req.body;
  db
    .create_product([name, description, price, url])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};

const getOne = (req, res, next) => {
  const db = req.app.get("db");
  const { params } = req;
  db
    .read_product([params.id])
    .then(product => res.status(200).send(product))
    .catch(() => res.status(500).send());
};

const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db
    .read_products()
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send());
};

const update = (req, res, next) => {
  const db = req.app.get("db");
  let { id } = req.params;
  let { desc } = req.query;
  db
    .update_product([id, desc])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};

const destroy = (req, res, next) => {
  const db = req.app.get("db");
  let { id } = req.params;
  db
    .delete_product(id)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  destroy
};

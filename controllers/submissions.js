const { submission } = require('../services');

exports.getAll = async (req, res) => {
  try {
    const submissions = await submission.getAll(req.params.id);
    console.log(submissions);
    res.json(submissions);
  }
  catch (err) {
    res.json({ err })
  }
}
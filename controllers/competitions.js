//@ts-check
const { competition } = require('../services');

exports.getAll = async (req, res) => {
  const competitions = await competition.getAll();
  res.json(competitions);
}
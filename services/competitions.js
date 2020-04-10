const Competitions = require('../models/competition');
const Submissions = require('../models/submission');

exports.getAll = async () => {
  const competitions = await Competitions.find();
  return await Promise.all(competitions.map( async competition => {
    competition.submissions = await Submissions.find({competition: competition.id}).count();
    return competition;
  }));
}
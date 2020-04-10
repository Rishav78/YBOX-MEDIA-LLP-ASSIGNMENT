const Competitions = require('../models/competition');
const Submissions = require('../models/submission');

exports.getAll = async () => {
  try {
    const competitions = await Competitions.find().populate('author');
    return await Promise.all(competitions.map(async competition => {
      competition._doc.submissions = await Submissions.find({ competition: competition.id }).countDocuments();
      return competition;
    }));
  }
  catch (err) {
    return { err: err.message };
  }
}
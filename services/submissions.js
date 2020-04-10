const Submissions = require('../models/submission');
const SubmissionsLike = require('../models/submissionLike');

exports.getAll = async competition => {
  try {
    const submissions = await Submissions.find({ competition });
    return await Promise.all(submissions.map(async submission => {
      submission._doc.likes = await SubmissionsLike.find({ submissions: submission.id }).countDocuments();
      return submission;
    }));
  }
  catch (err) {
    return { err: err.message };
  }
}
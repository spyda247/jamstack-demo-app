const progData = require('../data.json');
exports.getData = async () => {
  return {
    statuscode: 200,
    body: JSON.stringify(progData),
  };
};

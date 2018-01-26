const maxArea = require('../helpers/findWater.js');

const waterWallsCont = {
  'POST': (req, res) => {
    console.log(req.body);
    let inputHeight = req.body.height;
    let waterArea = maxArea(inputHeight);
    res.json({ 'waterArea': waterArea });
  }
};

module.exports.waterWallsCont = waterWallsCont;
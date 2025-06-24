const { model } = require('mongoose');

const HoldingsSchema = require('../schemas/HoldingsSchema');

const HoldingsModel = new model('Holdings', HoldingsSchema);

module.exports = { HoldingsModel };

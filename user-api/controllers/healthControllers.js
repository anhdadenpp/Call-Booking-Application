const asyncHandler = require('express-async-handler');
// Desc: Health check controller
const health = asyncHandler(async (req, res) => {
    res.status(200).json({ status: 'ok' })
});

module.exports = { health };
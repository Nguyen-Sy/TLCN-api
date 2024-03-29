const { verifyFacebookToken, verifyGoogleToken } = require("./verify")

const asyncHandler = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}

module.exports = {
	asyncHandler,
	verifyFacebookToken,
	verifyGoogleToken,
	constant: require("./constant"),
}

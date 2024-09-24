const rateLimit = require("express-rate-limit");

const AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS = process.env.AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS || 60000;
const AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW = process.env.AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW || 2;

const NON_AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS = process.env.NON_AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS || 60000;
const NON_AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW = process.env.NON_AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW || 2;

function getSessionId(req) {
    return req.body.userId;
}

// Rate limit for authenticated requests based on userId
exports.rateLimiter = rateLimit({
    windowMs: +AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS, // time-limit
    max: +AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW, // allowed requests count
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    keyGenerator: getSessionId
});

// Rate limit for non-authenticated requests
exports.nonAuthenticatedRateLimiter = rateLimit({
    windowMs: +NON_AUTHENTICATED_API_RATE_LIMIT_WINDOW_MILLISECONDS, // time-limit
    max: +NON_AUTHENTICATED_API_RATE_LIMIT_REQUESTS_PER_WINDOW, // allowed requests count
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
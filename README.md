# rate-limiter
limit the requests processing
express-rate-limiter --package

Authenticated APIs are limited to 100 requests per 10 seconds per user session for each service. 
Non-authenticated APIs are limited to 200 requests per 10 seconds per IP address for each service.(Allowed requests limit greater compare to authenticated APIs because multiple users are connected to same network they all are having same ip).

keyGenerator -- used to apply rate-limit for sepcific user/session.



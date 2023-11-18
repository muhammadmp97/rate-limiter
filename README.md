# rate-limiter

## How to run  
1. Install and run [Redis](https://hub.docker.com/_/redis)
2. Run `npm install`
3. Run `npm run dev --port=3000`
4. Open http://127.0.0.1:3000 in your browser.

## How does it work?  
Redis provides a set of flexible commands that can be really helpful in solving our real-world problems. For instancce, the `SET` command has options such as NX (only set the key if it does not already exist), hence we do not need to check if it already exists and this means running fewer commands. Here I set a key with an expire time, if it does not exist, and use the `INCR` command to increase its value by one. This command returns the new value and the incomming request gets blocked if it exceeded the defined limitation.

## Features
- Blocks the user after exceeding limitations
- Each endpoint has a specified limitation
- Users are known by their IP addresses

## Further learning
- https://blog.bytebytego.com/p/rate-limiting-fundamentals
- https://www.youtube.com/watch?v=CRGPbCbRTHA
- https://redis.io/commands

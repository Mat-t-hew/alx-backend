import redis from 'redis';

const publisher = redis.createClient();

publisher.on('error', (error) => console.error(`Redis client not connected to the server: ${error.message}`));
publisher.on('connect', () => console.log('Redis client connected to the server'));

function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About to send ${message}`);
        publisher.publish('ALX channel', message);
    }, time);
}

publishMessage('ALX Student #1 starts course', 100);
publishMessage('ALX Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('ALX Student #3 starts course', 400);

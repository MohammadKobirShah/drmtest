const express = require('express');
const request = require('request');
const app = express();

app.get('/stream', (req, res) => {
    const streamUrl = 'https://mprod-cdn.toffeelive.com/live/match-2/index.m3u8';

    const headers = {
        'User-Agent': 'Toffee (Linux;Android 14) AndroidXMedia3/1.1.1/64103898/4d2ec9b8c7534adc',
        'Cookie': 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9tcHJvZC1jZG4udG9mZmVlbGl2ZS5jb20v:Expires=1741644979:KeyName=prod_live_events:Signature=MuVXGJeM5ZHsCCErYQve0fk5Y7MUj2PnImRGgQiWxZuh6ZhZYKD5XFQMECPJhaVgC83TjT-E3JUZUn98e6qUBQ'
    };

    request({ url: streamUrl, headers: headers }).pipe(res);
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));

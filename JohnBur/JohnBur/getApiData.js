const path = require('path');
const request = net.request();

function setRequestConfig(_method, _hostname, _path) {
    request = net.request({
        method: _method,
        protocol: 'https:',
        hostname: _hostname,
        path: _path
    });
}
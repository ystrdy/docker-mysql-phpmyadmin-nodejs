const http = require('http');
const mysql = require('mysql2/promise');

console.log('mysql connecting...');
mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'test',
}).then(connection => {
    console.log('mysql connected.');

    const server = http.createServer((req, res) => {
        res.end(`Hello, world! env:${process.env.NODE_ENV}`);
    });

    server.listen(80, '0.0.0.0', () => {
        console.log('running port on 80.');
    });
});

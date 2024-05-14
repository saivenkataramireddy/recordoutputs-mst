const http = require('http');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, world!');
});
server.listen(3000, () => {
console.log('Server running at http://localhost:3000/');
});
process.on('SIGTERM', () => {
console.log('Received SIGTERM, shutting down gracefully');
server.close(() => {
console.log('Server closed');
process.exit(0);
});
});
process.on('SIGINT', () => {
console.log('Received SIGINT, shutting down gracefully');
server.close(() => {
console.log('Server closed');
process.exit(0);
});
});
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.rewriter({
    "api/recommendations:": "/recommendations",
    "/api/regions/emissions-factors": "/emissions",
    "/api/*": "/$1",
    "/api": "/footprint"
}))
server.use(router);


server.listen(port);

console.log(`Started on port: ${port}`)

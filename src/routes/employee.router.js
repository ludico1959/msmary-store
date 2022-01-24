module.exports = (server, routes, prefix = "api/v1/employees") => {
  routes.post("/", ClientController.createClient);
  server.use(prefix, routes);
};

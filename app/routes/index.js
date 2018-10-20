const placeRoutes = require("./place_routes");

module.exports = function(app, db) {
  placeRoutes(app, db);
  // Other route groups could go here in the future
};

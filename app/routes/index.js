const placeRoutes = require("./place_routes");

module.exports = function(app, db) {
  app.get("/", (req, res) => {
    res.send("Welcome to the Place Promo API.");
  });
  placeRoutes(app, db);
  // Other route groups could go here in the future
};

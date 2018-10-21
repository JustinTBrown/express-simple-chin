var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  app.post("/places", (req, res) => {
    const place = {
      title: req.body.title,
      physical_address: req.body.physical_address
    };
    db.collection("places").insert(place, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.get("/places", (req, res) => {
    const places = db.collection("places");
    // toArray from mongodb used to return array of documents from a collections. Returns a Promise if no callback passed.
    places.find().toArray(function(err, places) {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(places);
      }
    });
  });
  app.get("/places/:id", (req, res) => {
    const id = req.params.id;
    const objectId = { _id: new ObjectID(id) };
    const places = db.collection("places");
    places.findOne(objectId, (err, place) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(place);
      }
    });
  });
  app.delete("/places/:id", (req, res) => {
    const id = req.params.id;
    const objectId = { _id: new ObjectID(id) };
    const places = db.collection("places");
    places.remove(objectId, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        // title not available through params or writeOpCallback
        res.send(`Place (${id}) has been deleted!`);
      }
    });
  });
  app.put("/places/:id", (req, res) => {
    const id = req.params.id;
    const objectId = { _id: new ObjectID(id) };

    const places = db.collection("places");
    const place = {
      title: req.body.title,
      physical_address: req.body.physical_address
    };
    places.update(objectId, place, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(place);
      }
    });
  });
};

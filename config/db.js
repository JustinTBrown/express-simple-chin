module.exports = {
  url: `mongodb://${process.env.DB_USER}:${encodeURIComponent(
    process.env.DB_PASS
  )}@ds015934.mlab.com:15934/simple-express-chin`
};

if (process.env.NODE_ENV === "production") {
  // return the set of production keys
  module.exports = require("./prod")
} else {
  // return the set of development keys
  module.exports = require("./dev")
}

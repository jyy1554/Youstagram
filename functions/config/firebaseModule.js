var admin = require("firebase-admin");

var serviceAccount = require("../service/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://youstagram-p1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = admin
// module.exports = {
//   url: "mongodb+srv://ludlin886:Ludlin196958@cluster0.29680fe.mongodb.net/DressStore?retryWrites=true&w=majority",
// };

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/DressStore", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// module.exports = {

//   //url: "mongodb://localhost:27017/Blessing_db"

//   //ATLAS_URI=mongodb + srv://Blessing:crLlpnzOKuPjUPvz@cluster0.pzwkbe4.mongodb.net/tutorials?retryWrites=true&w=majority;

//    //url:"mongodb+srv://Blessing:crLlpnzOKuPjUPvz@cluster0.pzwkbe4.mongodb.net/Tutorial?retryWrites=true&w=majority"

// url:"mongodb+srv://Blessing:KF4CzZpj8tlYGtap@cluster0.29680fe.mongodb.net/SportStore?retryWrites=true&w=majority"

// };

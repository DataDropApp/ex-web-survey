var ddPush = require("../../lib");
var config = require("../config");  // loads the config file

// config = {url : "#### your url here ###", key: "#### your key here ###"}
var p1 = ddPush(config);

p1.write("This is saved from node.js")
  .then(function(body){
    console.log("The server responded with:", body);
  })
  .catch(function(err){
    console.log("There was an error:", err);
  });
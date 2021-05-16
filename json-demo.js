var fs = require("fs");

fs.readFile("employee.json", function (err, data) {
  if (err) console.log("Error Occured.");
  else {
    var strJSON = JSON.stringify(data.toString());
    console.log(JSON.parse(strJSON));
  }
});

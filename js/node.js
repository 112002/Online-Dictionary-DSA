var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+"/..")).listen(8080, function(){
    console.log('Server is up on port 8080...');
});
const fs = require('fs')

fs.readFile('file.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    var data = JSON.parse(fileContents)
    console.log("Loaded JSON into data variable");
    var henlo = data[18];
    console.log(henlo.smart);
  } catch(err) {
    console.error(err)
  }
})
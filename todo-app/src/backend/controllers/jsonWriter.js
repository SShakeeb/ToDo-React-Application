const fs = require("fs"); // require file system object
function jsonWriter(filePath,obj){
    fs.writeFile(filePath, JSON.stringify(obj, null, 2), err =>{
        if (err) {
            console.log(err);
        } else {
            console.log("File is successfully written.");
        }
    });
}
module.exports = jsonWriter;

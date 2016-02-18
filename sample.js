
var options = {
    prefixes : {
        sample : "SM"
    },
    strict : true
};

var new_id = require('./index.js');
new_id = new new_id(options);

console.log(new_id.create('sample'));
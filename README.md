#new-id

A small module for creating unique IDs that contain a specific prefix based on the type of ID - similar to the Twilio Ids.

## Format
Ids will be returned as RFC4122 v4 UUID prefixed with the user defined value in the prefixed mapping object as outlined below.

## Install

``` bash
npm install new-id
```

## Usage

``` javascript
var options = {
    prefixes : {
        message : "MG"
    },
    strict : true
};

var new_id = require('new-id');
new_id = new new_id(options);

console.log(new_id.create('message')); // prints ==> MG993d08bbd1af4dd49dfb47eb247eb0fd
```

## Options

* ```prefixes``` (object) - this is an object that contains a simple key/value pair of types and prefixes.  In the example above there is only one prefix ```message```.  So when that type if called the ID will be prefixed with "MG".
* ```strict``` (boolean) - By default this is true.  If there is no prefix mapping an error will be thrown indicating the type was incorrect.  However, you can overwrite this when creating the object with ```false``` so even if a prefix is not found a regular (non-prefixed) id will be returned.
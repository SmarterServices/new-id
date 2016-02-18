var uuid = require('node-uuid');

/**
 * Class constructor
 *
 * @sync
 * @method NewId
 * @param {Object} options Object that contains the options.
 * @param {String} options.prefixes All the prefixes that are valid for IDs
 * @param {Boolean} [options.strict] If the prefix is not located if an error should be thrown.  If this is false then a regular id without the previx will be returned.  This defaults to true.
**/

function NewId(options) {
    this.prefixes = options.prefixes;
    this.strict = options.strict || true;
}

/**
 * Create a new id.
 *
 * @async
 * @method create
 * @param {String} type The type of ID that should be created.
 */

NewId.prototype.create = function(type) {

    var id = uuid.v4().replace(/-/g,'');

    if((type in this.prefixes)){
        return this.prefixes[type] + id;
    }else{
        if(!this.strict) {
            throw type + " is not a valid id type, no prefix could be located.";
        }else {
            return id;
        }
    }
};
// export the class
module.exports = NewId;
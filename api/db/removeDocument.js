
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const modify = function(selector,collection_name,callback) {
    const url = 'mongodb://localhost:27017';

    const dbName = 'rental';

    const client = new MongoClient(url);

    client.connect(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);
    
        const collection = db.collection(collection_name)

        collection.deleteMany(selector,function(err,res) {
            assert.equal(null, err);

            callback(res.result.n);
        })
    });


}

module.exports = modify
var MongoClient = require('mongodb').MongoClient;
const state={
    db:null
}
//password  :  aPENLVhvVuWcaWG6
module.exports.connect=function(done){
    const url = "mongodb+srv://redAppleAdmin:aPENLVhvVuWcaWG6@redapplecluster.zpequk8.mongodb.net/?retryWrites=true&w=majority"
    const dbname ="shopping"
    MongoClient.connect(url, function(err, data) {
        if (err) throw err;
        state.db=data.db(dbname)
        done();
      });
}
module.exports.get=function(){
    return state.db
}


const {MongoClient}=require('mongodb');

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            const client=await MongoClient.connect("mongodb://localhost:27017");
            this.selectedDb=client.db('mongoDB');
            console.log(this.selectedDb)
        }
        catch(error){console.log(error)}
    }
}



